import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from "../assets/kourosh_alasti_resume.pdf";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowLeftIcon, DownloadIcon } from "@phosphor-icons/react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
    standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

const ResumePage = () => {
    const pdfOptions = useMemo(() => options, [options]);

    return (
        <div className="flex min-h-[90vh] w-fit flex-col items-center justify-center gap-2">
            <div className="flex h-12 w-full items-center justify-between gap-4 rounded-sm bg-slate-500/30 px-4">
                <Link to="/">
                    <button className="flex items-center gap-1 rounded-sm border border-slate-500 px-2 py-1">
                        <ArrowLeftIcon />
                        Go Home
                    </button>
                </Link>
                <a
                    href={resumePDF}
                    download={"kouroshalasti-resume"}
                    className="flex items-center gap-1 rounded-sm border border-slate-500 px-2 py-1"
                >
                    <DownloadIcon />
                    Download
                </a>
            </div>
            <Document file={resumePDF} options={pdfOptions}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default ResumePage;
