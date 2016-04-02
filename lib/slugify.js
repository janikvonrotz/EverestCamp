export default function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function get_filename(file){
  return (slugify(file.name().slice(0, -3)) + "." + file.extension());
};

export function get_thumb_filename(file){
  return (slugify(file.name().slice(0, -3)) + "-thumb." + file.extension());
};
