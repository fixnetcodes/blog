import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function Create(props) {

    const {data, setData, post, processing, errors, reset} = useForm({
        'name': ''

    });

    const addRole = (e) => {
        e.preventDefault();

        post(route('roles.store'))
    }
  return (
    <Authenticated
        user={props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Role</h2>}
    >
        <Head title='Roles' />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className='p-6 bg-white border-b border-gray-200"'>
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className='px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none'
                                href={ route("roles.index") }
                            >
                                View Roles
                            </Link>
                        </div>
                        <form onSubmit={addRole}>
                            <div>
                                <InputLabel htmlFor='name' value='Role name'/>
                                <TextInput
                                    id='name'
                                    name='name'
                                    className='mt-1 block w-full'
                                    placeholder='Enter name'
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                            </div>
                            <div>
                                <PrimaryButton className='mt-2' disabled={processing}>Save</PrimaryButton>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>

    </Authenticated>
  )
}
