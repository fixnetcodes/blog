import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react'

export default function AddNew({ auth }) {
    const {data, setData, post, processing, errors, reset} = useForm({
        'user_id': auth.id,
        'title': '',
        'description': '',

    });

    const postSubmit = (e) => {
        e.preventDefault();

        post(route('posts.store'));
    }
  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create New Post</h2>}
        >

            <Head title='Post' />
            <div className='py-10'>
                <form onSubmit={postSubmit}>
                    <div>
                        <InputLabel htmlFor='title' value='Post Title'/>
                        <TextInput
                            id='title'
                            name='title'
                            className="mt-1 block w-full"
                            autoComplete="title"
                            isFocused={true}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor='description' value='Description'/>
                        <TextInput
                            id='description'
                            name='description'
                            className="mt-1 block w-full"
                            autoComplete="description"
                            isFocused={true}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex items-center justify-end mt-4'>
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>

    </AuthenticatedLayout>
  )
}
