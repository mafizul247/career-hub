import { useEffect } from "react";

const useTitle = (title) => {
    document.title = `Career Hub || ${title}`
}

export default useTitle;