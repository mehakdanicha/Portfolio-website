import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent text-center py-6 border-t border-slate-800">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Mehak Dayalal. All rights reserved.
        </p>
      </footer>
  )
}

export default Footer