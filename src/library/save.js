import FileSaver from "file-saver";

export default function save(doc) {
    if (!confirm(`Are you sure you want to save \"${doc.title}\"?`))
        return;
    
    const content = JSON.stringify(doc);
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, `${doc.title}.jot`);
}