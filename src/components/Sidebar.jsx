import { useState, useEffect } from 'react'
import { instance } from '../api/axios' 

const Sidebar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("access-admin-token");

        if (token) {
            instance.get("/auth/me", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error("Xatolik:", error);
                setUser(null);
            });
        } else {
            console.log("Token topilmadi!");
        }
    }, []);

    return (
        <div className='w-[18%] h-screen p-4 bg-[#2ECC71] text-white'>
            <h2 className='text-xl font-semibold mb-4'>Admin Panel</h2>
            
            {user ? (
                <div>
                    <p><strong>Ism:</strong> {user.firstName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <img src={user.image} alt="" />
                </div>
            ) : (
                <p>Foydalanuvchi ma’lumotlari yuklanmoqda...</p>
            )}
        </div>
    )
}

export default Sidebar
