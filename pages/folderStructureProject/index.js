import {
  FolderIcon,
  DocumentIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid"
import { useState } from "react"
export default function App() {
  let folders = [
    {
      name: "Home",
      folders: [
        {
          name: "Movies",
          folders: [
            { name: "Action", folders: [] },
            { name: "Adventure", folders: [] },
            {
              name: "Drama",
              folders: [
                {
                  name: "2010s",
                  folders: [
                    { name: "Matrix.mp4" },
                    { name: "FightClub.vlc" },
                    { name: "CowboyBebop.zip" },
                  ],
                },
                { name: "2020s", folders: [] },
                { name: "2030s", folders: [] },
              ],
            },
          ],
        },
        {
          name: "Music",
          folders: [
            { name: "Jass", folders: [] },
            { name: "Rock", folders: [] },
            {
              name: "Opera",
              folders: [],
            },
          ],
        },
        { name: "Pictures", folders: [] },
        { name: "Documents", folders: [] },
        { name: "passwords.txt" },
      ],
    },
  ]
  return (
    <div
      className="p-8 max-w-sm mx-auto"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <ul className="">
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.name}></Folder>
        ))}
      </ul>
    </div>
  )
}
function Folder({ folder }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        {/* <FolderIcon className="size-6 text-sky-600"></FolderIcon>
        {folder.name} */}
        <button onClick={() => setIsOpen((s) => !s)}>
          {folder.folders && folder.folders?.length > 0 && (
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""}`}
            ></ChevronRightIcon>
          )}
        </button>
        {folder.folders ? (
          <FolderIcon className="size-6 text-sky-600"></FolderIcon>
        ) : (
          <DocumentIcon className="size-6 text-gray-900"></DocumentIcon>
        )}
        {folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <li className="my-1.5" key={folder.name}>
              <span className="flex items-center gap-1.5">
                {/* <FolderIcon className="size-6 text-sky-600"></FolderIcon>
              {folder.name} */}
                <Folder folder={folder} key={folder.name}></Folder>
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
