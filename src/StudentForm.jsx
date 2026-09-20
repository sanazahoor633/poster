import React, { useEffect, useMemo, useState } from 'react'

const initialCourses = [
  { course: 'حسنِ اخلاق', incharge: 'ذکیہ ضیاء اعوان', students: '10', start: '18 مئی 2023', end: '', venue: 'نواب ٹاؤن' },
  { course: 'راہِ قرآن', incharge: 'اتقا افتخار', students: '28', start: '15 مئی 2023', end: '', venue: '' },
  { course: 'مثالی استاد', incharge: 'ناشیہ ناصر', students: '25', start: 'اکتوبر 2016', end: '', venue: '' },
  { course: 'حی علی الفلاح', incharge: 'عرفانہ ساجد', students: '14', start: '25 اپریل 2016', end: '', venue: '' },
  { course: 'حی علی الفلاح', incharge: 'عرفانہ ساجد', students: '16', start: 'اکتوبر 2016', end: '', venue: '' },
  { course: 'راہِ قرآن', incharge: 'آمنہ بی بی', students: '15 تا 20', start: '16 اکتوبر 2016', end: '', venue: '' },
  { course: 'آؤ نماز کی طرف', incharge: 'عظمیٰ سہیل', students: '', start: '19 ستمبر 2018', end: '', venue: '' },
  { course: 'راہِ قرآن', incharge: 'مریم واہلر', students: '25', start: '7 نومبر 2019', end: '', venue: '' },
  { course: 'سورۃ البقرہ', incharge: 'شبانہ بیچینی', students: '14', start: '2 فروری 2020', end: '', venue: '' },
  { course: 'ٹائم مینجمنٹ', incharge: 'صبوحی ارشد', students: '', start: '14 نومبر 2020', end: '', venue: '' },
  { course: 'راہِ فلاح', incharge: 'عظمیٰ رشید / صالحہ', students: '20', start: 'یکم مارچ 2022', end: '', venue: 'نواب ٹاؤن برانچ' },
  { course: 'تم کب توبہ کرو گے', incharge: '', students: '10', start: '17 اکتوبر 2022', end: '', venue: 'برانچ' },
  { course: 'دسمبر کو ریس', incharge: 'منیبہ محمود', students: '19', start: '10 جولائی 2023', end: '', venue: 'برانچ' },
  { course: 'بچوں کی تربیت', incharge: 'موز پر وحید', students: '12', start: '10 اکتوبر 2023', end: '', venue: 'رپور ویو' },
  { course: 'سورۃ الکہف', incharge: 'عرفانہ ساجد', students: '8', start: '29 ستمبر 2023', end: '', venue: 'سٹی پارک' },
  { course: 'سورۃ الکہف', incharge: 'منیبہ محمود', students: '12', start: '12 فروری 2024', end: '', venue: 'برانچ' },
  { course: 'زبان کی حفاظت: باتونی نہ بن', incharge: 'صبوحی', students: '6', start: '10 اکتوبر 2023', end: '', venue: 'آرکیٹیکٹ سوسائٹی' },
  { course: 'حسنِ اخلاق (پارٹ 2)', incharge: 'ذکیہ ضیاء', students: '10', start: '21 مئی 2024', end: '', venue: 'برانچ' },
  { course: 'راہِ قرآن', incharge: 'منیر', students: '4', start: '15 مئی 2024', end: '', venue: 'برانچ' },
  { course: 'آؤ نماز کی طرف', incharge: 'صبوحی', students: '12', start: 'فروری 2025', end: '', venue: 'آرکیٹیکٹ' },
  { course: 'حیاتِ صحابیات', incharge: 'شمائلہ', students: '6', start: '18 جنوری 2025', end: '', venue: 'مجربہ اوپری' },
  { course: 'سورۃ الملک', incharge: 'منیبہ محمود', students: '', start: '24 اپریل 2025', end: '', venue: 'منی فورٹ' },
  { course: 'راہِ قرآن', incharge: 'صالحہ', students: '25 تا 30', start: 'دسمبر 2025', end: '', venue: 'ٹاؤن شپ' },
  { course: 'شہرِ رمضان', incharge: 'زنیرہ عثمان', students: '', start: '9 فروری 2026', end: '', venue: 'برانچ' },
  { course: 'تم کب توبہ کرو گے', incharge: 'زنیرہ عثمان', students: '', start: '30 اپریل 2026', end: '', venue: '' },
]

const emptyCourse = { course: '', incharge: '', students: '', start: '', end: '', venue: '' }
const storageKey = 'short-courses-records'

const getSavedCourses = () => {
  try {
    const savedCourses = JSON.parse(localStorage.getItem(storageKey))
    if (Array.isArray(savedCourses)) return savedCourses
  } catch {
    // Invalid saved data is ignored and the original report is shown instead.
  }
  return initialCourses.map((course, index) => ({ ...course, id: index + 1 }))
}

const StudentForm = () => {
  const [courses, setCourses] = useState(getSavedCourses)
  const [form, setForm] = useState(emptyCourse)
  const [query, setQuery] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingCourse, setEditingCourse] = useState(emptyCourse)
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(courses))
  }, [courses])
  const filteredCourses = useMemo(() => {
    const term = query.trim()
    return term ? courses.filter(({ course, incharge, venue }) => `${course} ${incharge} ${venue}`.includes(term)) : courses
  }, [courses, query])
  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const addCourse = (event) => {
    event.preventDefault()
    if (!form.course.trim()) return
    setCourses([...courses, { ...form, id: Date.now() }])
    setForm(emptyCourse)
  }
  const startEditing = (course) => {
    setEditingId(course.id)
    setEditingCourse({ course: course.course, incharge: course.incharge, students: course.students, start: course.start, end: course.end, venue: course.venue })
  }
  const saveCourse = (event) => {
    event.preventDefault()
    if (!editingCourse.course.trim()) return
    setCourses(courses.map((course) => course.id === editingId ? { ...editingCourse, id: course.id } : course))
    setEditingId(null)
    setEditingCourse(emptyCourse)
  }
  const deleteCourse = (course) => {
    if (!window.confirm(`کیا آپ "${course.course}" کا ریکارڈ حذف کرنا چاہتی ہیں؟`)) return
    setCourses(courses.filter((item) => item.id !== course.id))
    if (editingId === course.id) setEditingId(null)
  }

  return (
    <main className="min-h-screen bg-[#f6f3ed] px-4 py-8 text-[#25312b] sm:px-8 lg:px-14" dir="rtl">
      <section className="mx-auto max-w-7xl">
        {/* <header className="mb-7 flex flex-col gap-4 border-b border-[#b9c5b5] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-2 text-sm font-semibold tracking-wide text-[#64785d]">سالانہ ریکارڈ • 2016 — 2026</p><h1 className="text-3xl font-bold text-[#1f4137] sm:text-4xl">شارٹ کورسز رپورٹ</h1><p className="mt-2 text-sm text-[#667068]">کورس، انچارج، رجسٹرڈ طالبات اور تاریخوں کا مکمل ریکارڈ</p></div>
          <div className="rounded-2xl bg-[#24483c] px-5 py-3 text-center text-white shadow-sm"><span className="block text-2xl font-bold" dir="ltr">{totalRegistered}</span><span className="text-xs text-[#dbe9d7]">کم از کم رجسٹرڈ طالبات</span></div>
        </header> */}
        {/* <form onSubmit={addCourse} className="mb-7 rounded-2xl border border-[#d6ddd2] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e6eee3] font-bold text-[#315847]">+</span><h2 className="font-bold text-[#24483c]">نیا کورس شامل کریں</h2></div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
            <input name="course" value={form.course} onChange={updateForm} required placeholder="کورس کا نام *" className="field" /><input name="incharge" value={form.incharge} onChange={updateForm} placeholder="انچارج کا نام" className="field" /><input name="students" value={form.students} onChange={updateForm} placeholder="رجسٹرڈ طالبات" className="field" /><input name="start" value={form.start} onChange={updateForm} placeholder="تاریخ آغاز" className="field" /><input name="end" value={form.end} onChange={updateForm} placeholder="تاریخ اختتام" className="field" /><input name="venue" value={form.venue} onChange={updateForm} placeholder="وینیو" className="field" />
          </div>
          <button type="submit" className="mt-4 rounded-xl bg-[#24483c] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#17362d]">ریکارڈ شامل کریں</button>
        </form> */}
        <div className="overflow-hidden rounded-2xl border border-[#d6ddd2] bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-[#e1e6df] bg-[#fbfcfa] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><h2 className="font-bold text-[#24483c]">کورسز کی فہرست <span className="mr-1 text-sm font-normal text-[#778178]">({filteredCourses.length})</span></h2><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="کورس یا انچارج تلاش کریں" className="field w-full sm:w-72" /></div>
          <div className="hidden overflow-x-auto md:block"><table className="w-full min-w-[980px] text-right text-sm"><thead className="bg-[#edf3ea] text-[#315847]"><tr><th className="table-head w-16">نمبر</th><th className="table-head">کورس کا نام</th><th className="table-head">انچارج کا نام</th><th className="table-head">رجسٹرڈ طالبات</th><th className="table-head">تاریخ آغاز</th><th className="table-head">تاریخ اختتام</th><th className="table-head">وینیو</th><th className="table-head">عمل</th></tr></thead><tbody>
            {filteredCourses.map((item, index) => <tr key={item.id} className="group border-t border-[#edf0eb] transition hover:bg-[#fafcf8]"><td className="table-cell font-semibold text-[#688166]" dir="ltr">{index + 1}</td><td className="table-cell font-semibold text-[#263d33]">{item.course}</td><td className="table-cell">{item.incharge || '—'}</td><td className="table-cell" dir="ltr">{item.students || '—'}</td><td className="table-cell">{item.start || '—'}</td><td className="table-cell">{item.end || '—'}</td><td className="table-cell">{item.venue || '—'}</td><td className="table-cell"><div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"><button type="button" onClick={() => startEditing(item)} className="rounded-lg border border-[#9bb69b] px-3 py-1 text-xs font-bold text-[#315847] hover:bg-[#e6eee3]">Update</button><button type="button" onClick={() => deleteCourse(item)} className="rounded-lg border border-[#e7b5ad] px-3 py-1 text-xs font-bold text-[#a13e32] hover:bg-[#fff1ee]">Delete</button></div></td></tr>)}
          </tbody></table></div>
          <div className="divide-y divide-[#edf0eb] md:hidden">
            {filteredCourses.map((item, index) => <article key={item.id} className="p-4">
              <div className="mb-3 flex items-start justify-between gap-3"><div><span className="text-xs font-bold text-[#688166]">کورس #{index + 1}</span><h3 className="text-lg font-bold text-[#263d33]">{item.course}</h3></div><span className="rounded-lg bg-[#edf3ea] px-2.5 py-1 text-xs font-bold text-[#315847]">{item.students || '—'} طالبات</span></div>
              <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm"><div><dt className="text-xs text-[#8a948b]">انچارج</dt><dd>{item.incharge || '—'}</dd></div><div><dt className="text-xs text-[#8a948b]">وینیو</dt><dd>{item.venue || '—'}</dd></div><div><dt className="text-xs text-[#8a948b]">تاریخ آغاز</dt><dd>{item.start || '—'}</dd></div><div><dt className="text-xs text-[#8a948b]">تاریخ اختتام</dt><dd>{item.end || '—'}</dd></div></dl>
              <div className="mt-4 flex gap-2"><button type="button" onClick={() => startEditing(item)} className="flex-1 rounded-lg border border-[#9bb69b] px-3 py-2 text-sm font-bold text-[#315847] hover:bg-[#e6eee3]">Update</button><button type="button" onClick={() => deleteCourse(item)} className="flex-1 rounded-lg border border-[#e7b5ad] px-3 py-2 text-sm font-bold text-[#a13e32] hover:bg-[#fff1ee]">Delete</button></div>
            </article>)}
          </div>
        </div>
        <p className="mt-3 text-xs leading-6 text-[#788078]">جن اندراجات میں تاریخِ اختتام یا تعداد مہیا نہیں تھی، وہاں ڈیش رکھا گیا ہے۔ اسے اوپر والے فارم سے مکمل کیا جا سکتا ہے۔</p>
      </section>
      {editingId && <div className="fixed inset-0 z-10 grid place-items-center overflow-y-auto bg-[#15241d]/45 p-4">
        <form onSubmit={saveCourse} className="my-auto w-full max-w-2xl rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
          <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold text-[#24483c]">کورس کی تفصیل میں ترمیم</h2><button type="button" onClick={() => setEditingId(null)} className="text-lg text-[#667068]" aria-label="بند کریں">×</button></div>
          <div className="grid gap-3 sm:grid-cols-2"><input name="course" value={editingCourse.course} onChange={(event) => setEditingCourse({ ...editingCourse, [event.target.name]: event.target.value })} required placeholder="کورس کا نام *" className="field" /><input name="incharge" value={editingCourse.incharge} onChange={(event) => setEditingCourse({ ...editingCourse, [event.target.name]: event.target.value })} placeholder="انچارج کا نام" className="field" /><input name="students" value={editingCourse.students} onChange={(event) => setEditingCourse({ ...editingCourse, [event.target.name]: event.target.value })} placeholder="رجسٹرڈ طالبات" className="field" /><input name="venue" value={editingCourse.venue} onChange={(event) => setEditingCourse({ ...editingCourse, [event.target.name]: event.target.value })} placeholder="وینیو" className="field" /><input name="start" value={editingCourse.start} onChange={(event) => setEditingCourse({ ...editingCourse, [event.target.name]: event.target.value })} placeholder="تاریخ آغاز" className="field" /><input name="end" value={editingCourse.end} onChange={(event) => setEditingCourse({ ...editingCourse, [event.target.name]: event.target.value })} placeholder="تاریخ اختتام" className="field" /></div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><button type="submit" className="rounded-xl bg-[#24483c] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#17362d]">Save Changes</button><button type="button" onClick={() => setEditingId(null)} className="rounded-xl border border-[#cbd5c8] px-5 py-2.5 text-sm font-bold text-[#526158]">Cancel</button></div>
        </form>
      </div>}
    </main>
  )
}

export default StudentForm
