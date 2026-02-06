import React, { useEffect, useState } from 'react'
import { getData } from '@/context/UserContext'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'

const AdminDashboard = () => {
  const { user } = getData()
  const [pendingEditors, setPendingEditors] = useState([])
  const [allProfiles, setAllProfiles] = useState([])

  const token = localStorage.getItem('accessToken')

useEffect(() => {
    const fetchData = async () => {
      try {

        const pendingRes = await axios.get('http://localhost:3000/user/pending-editors', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setPendingEditors(pendingRes.data.editors)

    
        const profileRes = await axios.get('http://localhost:3000/user/all-editors')
        setAllProfiles(profileRes.data.data)
        
      } catch (err) { console.log("Fetch Error:", err) }
    }
    if (user?.role === 'admin') fetchData()
  }, [user, token])

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:3000/user/approve-editor/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success("Editor Approved!")
      setPendingEditors(pendingEditors.filter(ed => ed._id !== id))
    } catch (err) { toast.error("Failed to approve") }
  }

  if (user?.role !== "admin") return <Navigate to="/" />

  return (
<div className="p-10 bg-red-50 min-h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4 tracking-tight">Admin Dashboard</h1>
      
      {/* SECTION 1: PENDING APPROVALS */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-md border border-red-100">
        <h2 className="text-xl font-bold mb-4 text-gray-700 flex items-center gap-2">
           Pending Editor Approvals
        </h2>
        {pendingEditors.length === 0 ? <p className="text-gray-400">No pending editors.</p> : (
          <div className="space-y-4">
            {pendingEditors.map(editor => (
              <div key={editor._id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <p className="font-bold text-gray-800">{editor.username}</p>
                  <p className="text-sm text-gray-500">{editor.email}</p>
                </div>
                <button 
                  onClick={() => handleApprove(editor._id)}
                  className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition-all shadow-sm"
                >
                  Approve
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

   
      <div className="mt-12 bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-xl font-bold mb-4 text-gray-700 flex items-center gap-2">
         All Profiles
        </h2>
        {allProfiles.length === 0 ? <p className="text-gray-400">No editor profiles found.</p> : (
          <div className=" w-full flex flex-col gap-6">
            {allProfiles.map(profile => (
              <div key={profile._id} className="p-5 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-sm transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900">{profile.name}</h3>
                  <span className="bg-red-100 text-red-600 text-[10px] px-2 py-1 rounded-full font-black uppercase">
                    ${profile.rate}/hr
                  </span>
                </div>
                <p className="text-sm text-green-600 font-bold mb-2 uppercase tracking-wide">{profile.role}</p>
                <p className="text-xs text-gray-600 line-clamp-2 mb-3 italic">"{profile.bio}"</p>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {profile.skills.map((skill, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 text-[9px] px-2 py-1 rounded text-gray-500 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Exp: {profile.experience}</span>
                  <span className="text-[10px] text-green-500 font-bold uppercase">{profile.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard