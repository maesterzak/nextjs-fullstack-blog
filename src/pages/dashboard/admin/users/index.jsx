import AdminLayout from "@/component/Layout/AdminLayout";


export default function Author() {

  return (
    <AdminLayout>

      <div className="flex flex-wrap">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="author-avatar.jpg" alt="Author Avatar" />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Author</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">John Doe</a>
              <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat arcu eget magna interdum, eget mattis nulla consectetur. Mauris lacinia ex sed tortor malesuada consectetur.</p>
              <div class="mt-4">
                <a href="#" class="text-indigo-500 hover:text-indigo-600">View Articles</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  )
}