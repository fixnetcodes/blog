import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function All({auth}) {
  return (
    <Authenticated
        user = {auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
    >
        <Head title='Posts' />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">View All Blog Posts</div>
                </div>
            </div>
        </div>
    </Authenticated>
  )
}
