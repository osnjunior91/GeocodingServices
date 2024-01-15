export const GetApiErrorMessage = ({ response }) => {
    const { data } = response;
    return data?.message
}