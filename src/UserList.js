import React, { useState, useEffect } from "react";

const UserList = () => {
  // 1. نبدأ بجلب البيانات من localStorage مباشرة عند تعريف الحالة (State)
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("mun_data_v2");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "موظف افتراضي 1",
            email: "info@shyoukh.org",
            phone: "022561002",
          },
        ];
  });

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  // 2. دالة حفظ البيانات في المتصفح عند أي تغيير في المصفوفة
  useEffect(() => {
    localStorage.setItem("mun_data_v2", JSON.stringify(users));
  }, [users]);

  // 3. إضافة موظف جديد
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newName || !newEmail || !newPhone)
      return alert("الرجاء إدخال كافة البيانات");

    const newUser = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      phone: newPhone,
    };

    setUsers((prevUsers) => [newUser, ...prevUsers]);
    setNewName("");
    setNewEmail("");
    setNewPhone("");
  };

  // 4. حذف موظف
  const deleteUser = (id) => {
    if (window.confirm("هل أنت متأكد من الحذف؟")) {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    }
  };

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="p-4 md:p-10 max-w-7xl mx-auto min-h-screen bg-gray-50"
      dir="rtl"
    >
      <div className="mb-10 text-right">
        <h2 className="text-3xl font-black text-gray-800 border-r-8 border-green-600 pr-4">
          إدارة كادر البلدية
        </h2>
        <p className="text-gray-500 mt-2">
          البيانات الآن تُحفظ بشكل دائم على متصفحك الشخصي.
        </p>
      </div>

      {/* نموذج الإضافة */}
      <div className="bg-white p-8 rounded-3xl shadow-lg mb-12 border border-gray-100">
        <form
          onSubmit={handleAddUser}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <input
            type="text"
            placeholder="اسم الموظف"
            className="p-3 border rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-green-400"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="p-3 border rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-green-400"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="رقم الهاتف"
            className="p-3 border rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-green-400 text-left"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-all">
            حفظ البيانات
          </button>
        </form>
      </div>

      <input
        type="text"
        placeholder="🔍 ابحث عن اسم موظف..."
        className="w-full p-4 mb-10 rounded-2xl border-none shadow-md outline-none focus:ring-2 focus:ring-green-500"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((u) => (
          <div
            key={u.id}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 group hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center text-2xl font-black">
                {u.name.charAt(0)}
              </div>
              <h3 className="font-bold text-xl text-gray-800">{u.name}</h3>
            </div>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${u.email}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
              >
                <span className="text-xl">📧</span>
                <span className="text-sm truncate">{u.email}</span>
              </a>
              <a
                href={`tel:${u.phone}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
              >
                <span className="text-xl">📞</span>
                <span className="text-sm font-bold font-mono">{u.phone}</span>
              </a>
            </div>
            <button
              onClick={() => deleteUser(u.id)}
              className="w-full py-2 text-red-400 hover:text-red-700 transition-all text-sm font-bold"
            >
              🗑️ حذف من السجل
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
