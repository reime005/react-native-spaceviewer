import { FILE_NEXT_LAUNCHES, FILE_PREV_LAUNCHES } from "../../constants/files";

export default initialState = {
  [FILE_NEXT_LAUNCHES]: [],
  [FILE_PREV_LAUNCHES]: [],
  isLoading: true,
  enddate: '',
}