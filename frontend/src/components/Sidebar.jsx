import { useEffect } from "react";
import { useChartStore } from "../store/useChatStore"
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";


export const Sidebar = () => {
    const {getUsers, users, selectedUser, setSelectedUser, isUserLoading} = useChartStore();
    const onlineUsers = [];

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    if(isUserLoading) return <SidebarSkeleton />

  return (
    <aside className="h-full w-20 lg:w-12 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>
    </aside>
  )
}
