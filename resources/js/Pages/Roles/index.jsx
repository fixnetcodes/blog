import PrimaryButton from '@/Components/PrimaryButton'
import WarningButton from '@/Components/WarningButton'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Index(props) {

    const { roles } = usePage().props
  return (
    <Authenticated
        user={props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List of Roles</h2>}
    >
        <Head title='Roles' />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className='p-6 bg-white border-b border-gray-200"'>
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className='px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none'
                                href={ route("roles.create") }
                            >
                                Create Role
                            </Link>
                        </div>
                        <table className='table-auto border border-gray-400'>
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 w-20">Sr.No</th>
                                    <th className="px-4 py-2">Role Name</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {roles && roles.map((role) => (
                                    <tr key={role.id}>
                                        <td className="border border-gray-400 px-4 py-2">{ role.id }</td>
                                        <td className="border border-gray-400 px-4 py-2">{ role.name }</td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            <Link href={route('roles.edit', role.id)}>
                                                <WarningButton>
                                                    Edit
                                                </WarningButton>
                                            </Link>
                                            <Link href={route('roles.destroy', role.id)}> <PrimaryButton>Delete</PrimaryButton> </Link>
                                        </td>
                                    </tr>
                                )) }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>

    </Authenticated>
  )
}
