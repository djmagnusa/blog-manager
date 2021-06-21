export default (posts, { text, sortBy, date }) => {
    return posts.filter((post) => {
        const textMatch = post.title.toLowerCase().includes(text.toLowerCase());

        return textMatch //if this returns true only that posts with the title in the search box will be kept
    }).sort((a,b) => {
        if(sortBy === 'title') {
            return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
        } else if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

    });

};