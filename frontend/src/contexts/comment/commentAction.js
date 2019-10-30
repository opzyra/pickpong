import * as apiClient from '../../utils/apiClient';
import * as commentContext from './commentContext';

export async function fetchComments(dispatch, page = 1) {
  const { items, count, pageCount } = await apiClient.get('/comment', {
    page,
  });

  const fetchCommentsActionCreator = commentContext.fetchComments({
    items,
    page,
    count,
    pageCount,
  });
  dispatch(fetchCommentsActionCreator);
}
