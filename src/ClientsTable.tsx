import {Select} from "@headlessui/react";
import {ChevronDownIcon } from '@heroicons/react/16/solid'
import { Client } from "./types/Client.tsx";
import { Project } from "./types/Project.tsx";

// We'll replace these with an API call but the structure will look like this
const projects: Project[] = [
  { id: '1', name: 'Project X' },
  { id: '2', name: 'Manhattan' },
  { id: '3', name: 'New Earth 2050' },
  { id: '4', name: 'Top Secret' },
];
const clients: Client[] = [
  {
    id: '1',
    firstName: 'Adam',
    lastName: 'Phorester',
    primaryProjectId: projects[0].id,
    primaryProject: projects[0],
    email: 'adam@phorest.com',
    age: 30,
    vip: false
  },
];

function ClientsTable() {
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            A list of all the clients in your account including their name, primary project, email and age.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            + Add new client
          </button>
        </div>
      </div>

          <div className="mt-4">
            <div className="inline-flex flex-col">
              <label htmlFor="filter-project" className="block text-sm/6 font-medium text-gray-900">
                Project
              </label>
              <div className="mt-2 grid grid-cols-1">
                <Select
                  id="filter-project"
                  name="filter-project"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">-- Any --</option>
                  {projects.map((project) => (
                    <option value={project.id} key={project.id}>{project.name}</option>
                  ))}
                </Select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    First Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Last Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Primary project
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Age
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {client.firstName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.lastName}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.primaryProject.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{client.age}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsTable;
