import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";


const AnnouncementSection = () => {
    return (
        <div className="rounded-sm border border-slate-500 p-4 shadow-sm w-full flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCircleExclamation} className="size-6 "/>
            <h1>FutDrafts won 3rd Place at CSU Fullerton's first ever Computer Science Showcase. </h1>
        </div>
    )
}

export default AnnouncementSection;