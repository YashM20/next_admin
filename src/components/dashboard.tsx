'use client'

import * as React from "react"
import { Search, Bell, Settings, ChevronDown, MoreHorizontal, ChevronRight, Star, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const revenueData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
]

const transactions = [
  { id: 1, name: 'Premium T-Shirt', date: 'Jul 12th 2024', status: 'Completed', code: '0JWEJS7ISNC' },
  { id: 2, name: 'Playstation 5', date: 'Jul 12th 2024', status: 'Pending', code: '0JWEJS7ISNC' },
  { id: 3, name: 'Hoodie Gombrong', date: 'Jul 12th 2024', status: 'Pending', code: '0JWEJS7ISNC' },
  { id: 4, name: 'iPhone 15 Pro Max', date: 'Jul 12th 2024', status: 'Completed', code: '0JWEJS7ISNC' },
  { id: 5, name: 'Lotse', date: 'Jul 12th 2024', status: 'Completed', code: '0JWEJS7ISNC' },
  { id: 6, name: 'Starbucks', date: 'Jul 12th 2024', status: 'Completed', code: '0JWEJS7ISNC' },
  { id: 7, name: 'Tinek Detstar T-Shirt', date: 'Jul 12th 2024', status: 'Completed', code: '0JWEJS7ISNC' },
]

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Star className="w-6 h-6 mr-2 text-[#5AE48A]" />
          <h1 className="text-xl font-semibold">Siohioma</h1>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 bg-[#0A3622] text-white p-6 flex flex-col overflow-y-auto`}>
        <div className="flex items-center mb-8">
          <Star className="w-6 h-6 mr-2 text-[#5AE48A]" />
          <h1 className="text-xl font-semibold">Siohioma</h1>
        </div>
        <nav className="flex-grow">
          <h2 className="text-xs font-semibold mb-4 text-gray-400">MENU</h2>
          <ul className="space-y-2">
            <li className="flex items-center p-2 bg-[#0D4028] rounded">
              <div className="w-6 h-6 mr-3 bg-[#15573A] rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-[#5AE48A] rounded-sm"></div>
              </div>
              <span>Overview</span>
            </li>
            <li className="flex items-center p-2">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white"></div>
              </div>
              <span>Statistics</span>
            </li>
            <li className="flex items-center p-2">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span>Customers</span>
            </li>
            <li className="flex items-center p-2">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white"></div>
              </div>
              <span>Product</span>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </li>
            <li className="flex items-center p-2">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white"></div>
              </div>
              <span>Messages</span>
              <div className="ml-auto bg-[#5AE48A] text-[#0A3622] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">13</div>
            </li>
            <li className="flex items-center p-2">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white"></div>
              </div>
              <span>Transactions</span>
            </li>
          </ul>
        </nav>
        <nav className="mb-8">
          <h2 className="text-xs font-semibold mb-4 text-gray-400">GENERAL</h2>
          <ul className="space-y-2">
            <li className="flex items-center p-2">
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </li>
            <li className="flex items-center p-2">
              <div className="w-5 h-5 mr-3 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span>Security</span>
            </li>
          </ul>
        </nav>
        <div className="mt-auto pt-8 border-t border-[#15573A]">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-yellow-400 mr-3 flex items-center justify-center text-[#0A3622] font-bold">F</div>
            <div>
              <p className="font-semibold">Fandaww Punx</p>
              <p className="text-xs text-gray-400">fandaww@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <ScrollArea className="flex-1">
        <div className="p-4 lg:p-8">
          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
            <div className="w-full lg:w-auto">
              <Select defaultValue="sales-admin" >
                <option value="sales-admin">Sales Admin</option>
              </Select>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
              <div className="relative w-full lg:w-auto">
                <Input className="pl-10 pr-4 py-2 rounded-full bg-white w-full" placeholder="Search anything in Siohioma..." />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex items-center space-x-4 w-full lg:w-auto">
                <Bell className="text-gray-400" />
                <Button variant="outline" className="rounded-full w-full lg:w-auto">
                  Add new product
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          <main>
            <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-500 mb-6">An any way to manage sales with care and precision.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#0A3622] text-white p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">Update</span>
                </div>
                <p className="text-sm mb-2">Feb 12th 2024</p>
                <p className="font-bold mb-2">Sales revenue increased 40% in 1 week</p>
                <a href="#" className="text-sm text-[#5AE48A] flex items-center">
                  See Statistics
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Net Income</span>
                  <MoreHorizontal className="text-gray-400" />
                </div>
                <p className="text-3xl font-bold mb-2">$193.000</p>
                <p className="text-sm text-green-500">+35% from last month</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Total Return</span>
                  <MoreHorizontal className="text-gray-400" />
                </div>
                <p className="text-3xl font-bold mb-2">$32.000</p>
                <p className="text-sm text-red-500">-24% from last month</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Transaction</span>
                  <MoreHorizontal className="text-gray-400" />
                </div>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        </div>
                        <div>
                          <p className="font-semibold">{transaction.name}</p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm ${transaction.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                          {transaction.status}
                        </p>
                        <p className="text-xs text-gray-500">{transaction.code}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Revenue</span>
                  <MoreHorizontal className="text-gray-400" />
                </div>
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold mr-2">$193.000</h3>
                  <span className="text-sm text-green-500">+35% from last month</span>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="income" stroke="#0A3622" strokeWidth={2} />
                      <Line type="monotone" dataKey="expenses" stroke="#5AE48A" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Sales Report</span>
                <MoreHorizontal className="text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">Product Launched</span>
                  <div className="flex-1 h-4 bg-[#5AE48A] rounded"></div>
                  <span className="ml-2 text-sm font-semibold">(233)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">Ongoing Product</span>
                  <div className="flex-1 h-4 bg-[#5AE48A] rounded" style={{ width: '60%' }}></div>
                  <span className="ml-2 text-sm font-semibold">(23)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-500">Product Sold</span>
                  <div className="flex-1 h-4 bg-[#5AE48A] rounded" style={{ width: '90%' }}></div>
                  <span className="ml-2 text-sm font-semibold">(482)</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </ScrollArea>

      {/* Right Sidebar */}
      <div className="w-full lg:w-80 bg-white p-6 overflow-y-auto">
        <div className="mb-6">
          <Select defaultValue="january-may-2024" >
            <option value="january-may-2024">January 2024 - May 2024</option>
          </Select>
        </div>
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="font-semibold mb-4">Total View Performance</h2>
          <div className="relative w-48 h-48 mx-auto">
            {/* Replace with an actual donut chart component */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">565K</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">Here are some tips on how to improve your score.</p>
          <Button variant="outline" className="w-full mt-4">Guide Views</Button>
        </div>
        <div className="flex items-center justify-between mb-4 flex-wrap">
          <div className="flex items-center mr-4 mb-2">
            <div className="w-4 h-4 bg-[#5AE48A] rounded mr-2"></div>
            <span className="text-sm">View Count</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <div className="w-4 h-4 bg-[#0A3622] rounded mr-2"></div>
            <span className="text-sm">Percentage</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-orange-400 rounded mr-2"></div>
            <span className="text-sm">Sales</span>
          </div>
        </div>
        <div className="bg-[#F0F9E8] rounded-lg p-6">
          <div className="flex items-start mb-4">
            <div className="w-10 h-10 bg-[#5AE48A] rounded-lg flex items-center justify-center mr-3">
              <Star className="text-[#0A3622]" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Level up your sales managing to the next level.</h2>
              <p className="text-sm text-gray-600">An any way to manage sales with care and precision.</p>
            </div>
          </div>
          <Button className="w-full bg-[#0A3622] text-white hover:bg-[#0D4028]">Update to Siohioma+</Button>
        </div>
      </div>
    </div>
  )
}