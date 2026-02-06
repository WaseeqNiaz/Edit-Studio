import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2, ArrowLeft } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const Signup = ({ selectedRole, onBack }) => {
  const navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setformData] = useState({ username: "", email: "", password: "" })

  const HandleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     setIsLoading(true)
  //     const res = await axios.post('http://localhost:3000/user/register', formData)
  //     if (res.data.success) {
  //       toast.success(res.data.message)
  //       navigate('/verify')
  //     }
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || 'Registration failed')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      // Added selectedRole to the payload
      const res = await axios.post('http://localhost:3000/user/register', { ...formData, role: selectedRole })
      if (res.data.success) {
        toast.success(res.data.message)
        navigate('/verify')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed')
    } finally {
      setIsLoading(false)
    }
}

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-10 relative bg-white">
      {/* Back to Role Selection */}
      <button onClick={onBack} className="absolute top-6 left-6 flex items-center text-xs text-gray-400 hover:text-green-600 transition-colors">
        <ArrowLeft className="w-3 h-3 mr-1" /> Change Role
      </button>

      <form onSubmit={handleSubmit} className="w-full space-y-3">
        <div className="text-center mb-4">
          <h1 className='text-2xl font-bold text-green-600 capitalize'>{selectedRole} Registration</h1>
          <p className='text-[11px] text-gray-500'>Create your account to get started</p>
        </div>
        
        <div className="space-y-1">
          <Label className="text-xs">Full Name</Label>
          <Input name="username" value={formData.username} onChange={HandleChange} placeholder="Enter your name" required className="h-10 bg-gray-50 border-none shadow-none" />
        </div>

        <div className="space-y-1">
          <Label className="text-xs">Email Address</Label>
          <Input name="email" type="email" value={formData.email} onChange={HandleChange} placeholder="email@example.com" required className="h-10 bg-gray-50 border-none shadow-none" />
        </div>

        <div className="space-y-1">
          <Label className="text-xs">Password</Label>
          <div className="relative">
            <Input name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={HandleChange} placeholder="••••••••" required className="h-10 bg-gray-50 border-none shadow-none" />
            <div onClick={() => setshowPassword(!showPassword)} className="absolute right-3 top-3 cursor-pointer opacity-50">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white mt-4 h-11 font-bold tracking-wide shadow-lg" disabled={isLoading}>
          {isLoading ? <Loader2 className='animate-spin h-4 w-4' /> : "SIGN UP"}
        </Button>
      </form>
    </div>
  )
}

export default Signup;