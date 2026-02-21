import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../assets/Data.js'

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === String(id))
  const [modalOpen, setModalOpen] = useState(false)
  const [activeImg, setActiveImg] = useState(null)

  const openModal = (img) => {
    setActiveImg(img)
    setModalOpen(true)
  }

  const closeModal = () => {
    setActiveImg(null)
    setModalOpen(false)
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">Project not found</h2>
          <Link to="/projects" className="mt-4 inline-block btn btn-primary">Back to Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-transparent py-12">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Header Banner (image only) */}
        <div className="relative rounded-2xl overflow-hidden h-[340px] md:h-[420px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

          <div className="absolute right-6 top-6 flex gap-3">
            {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">View Live</a>}
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-resume">View Code</a>}
          </div>
        </div>

        {/* Title and short description below banner */}
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">{project.title}</h1>
          <p className="mt-3 text-gray-200 max-w-3xl">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools && project.tools.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/6 backdrop-blur-sm text-white border border-white/6">{t}</span>
            ))}
          </div>
        </div>

        {/* Overview & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-blue-300">Project Overview</h3>
            <p className="mt-3 text-gray-200 leading-relaxed">{project.longDescription || project.description}</p>
          </div>

          <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-blue-300">Key Features</h3>
            <ul className="mt-3 space-y-2 text-gray-200 list-inside">
              {(project.features || []).map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-300">●</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h3 className="h2">Gallery</h3>
          <p className="muted mt-1">Screenshots of the project</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {(project.gallery || [project.image, project.image, project.image]).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105">
                <button onClick={() => openModal(img)} className="w-full h-48 p-0 border-0 bg-transparent">
                  <img src={img} alt={`${project.title} screenshot ${i+1}`} className="w-full h-48 object-cover rounded-xl cursor-pointer" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={closeModal}>
            <div className="max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <button onClick={closeModal} className="absolute right-2 top-2 text-white text-2xl">×</button>
                <img src={activeImg} alt="Expanded screenshot" className="w-full h-auto rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        )}

        {/* Development Process */}
        <div className="mt-10">
          <h3 className="h2">Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-xl p-6 shadow-sm hover:shadow-md transform hover:-translate-y-2 transition">
              <div className="text-2xl mb-3">🔍</div>
              <h4 className="font-semibold text-blue-300">Research & Planning</h4>
              <p className="mt-2 muted">Define scope, user needs, and technical approach.</p>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-xl p-6 shadow-sm hover:shadow-md transform hover:-translate-y-2 transition">
              <div className="text-2xl mb-3">🎨</div>
              <h4 className="font-semibold text-blue-300">Design & Prototyping</h4>
              <p className="mt-2 muted">Create UI mockups, iterate on visual and UX details.</p>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/6 rounded-xl p-6 shadow-sm hover:shadow-md transform hover:-translate-y-2 transition">
              <div className="text-2xl mb-3">🚀</div>
              <h4 className="font-semibold text-blue-300">Testing & Launch</h4>
              <p className="mt-2 muted">QA, performance checks, and production deployment.</p>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mt-10">
          <h3 className="h2">Technologies Used</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {(project.tools || []).map((t) => (
              <div key={t} className="px-4 py-2 rounded-lg bg-white/6 border border-white/6 text-sm text-white">{t}</div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link to="/projects" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">Want to see more projects?</Link>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails