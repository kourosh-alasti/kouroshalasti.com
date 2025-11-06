import { Link } from "react-router-dom";
import {
    LinkedinLogoIcon,
    GithubLogoIcon,
    EnvelopeOpenIcon,
    FilePdfIcon,
} from "@phosphor-icons/react";

function SocialSection() {
    return (
        <section className="col-span-1 flex w-full flex-row self-center rounded-sm border border-slate-500 px-6 py-3 md:col-span-3">
            <div className="flex flex-row gap-2">
                <div className="rounded-md border border-gray-700 px-3 py-2">
                    <a
                        target="_blank"
                        href="https://github.com/kourosh-alasti"
                        data-s:event="Github Visit"
                    >
                        <GithubLogoIcon />
                    </a>
                </div>

                <div className="rounded-md border border-gray-700 px-3 py-2">
                    <a
                        href="https://linkedin.com/in/kourosh-alasti"
                        target="_blank"
                        data-s:event="Linkedin Visit"
                    >
                        <LinkedinLogoIcon />
                    </a>
                </div>

                <div className="rounded-md border border-gray-700 px-3 py-2">
                    <a
                        href="mailto:kouroshalastibusiness@gmail.com"
                        data-s:event="Email Click"
                    >
                        <EnvelopeOpenIcon />
                    </a>
                </div>

                <div className="rounded-md border border-gray-700 px-3 py-2">
                    <Link to="/resume" data-s:event="Resume View">
                        <FilePdfIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SocialSection;
