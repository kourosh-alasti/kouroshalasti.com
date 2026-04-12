import { WarningCircleIcon } from "@phosphor-icons/react";

const AnnouncementSection = () => {
    return (
        <div className="flex w-full flex-row items-center gap-2 rounded-sm border border-slate-500 p-4 shadow-sm">
            <WarningCircleIcon className="size-6" />
            <h1>
                FutDrafts won 3rd Place at CSU Fullerton's first ever Computer
                Science Showcase.
            </h1>
        </div>
    );
};

export default AnnouncementSection;
