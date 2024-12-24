import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialSection() {
  return (
    <section className="col-span-1 flex w-full flex-row self-center rounded border border-slate-500 px-6 py-3 md:col-span-3">
      <div className="flex flex-row gap-2">
        <div className="rounded-md border border-gray-700 px-3 py-2">
          <a target="_blank" href="https://github.com/kourosh-alasti">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="rounded-md border border-gray-700 px-3 py-2">
          <a href="https://linkedin.com/in/kourosh-alasti" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialSection;
