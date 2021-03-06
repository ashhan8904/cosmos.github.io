export const allComments = state => state.comments.all
export const allPosts = state => state.posts.all
export const allCountries = state => state.countries.all
export const faqElementsVisible = state => state.toc.faq.elementsVisible
export const faqTocVisible = state => state.toc.faq.tocVisible
export const whitepaperElementsVisible = state => state.toc.whitepaper.elementsVisible
export const whitepaperTocVisible = state => state.toc.whitepaper.tocVisible
export const newComment = state => state.newComment
export const editComment = state => state.editComment
export const sessionRequest = state => state.session.request
export const sessionUser = state => state.session.user
export const sessionVotes = state => state.session.votes

export const notifications = state => state.notifications
export const config = state => state.config
