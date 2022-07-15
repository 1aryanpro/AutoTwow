export const state = () => ({
    user: null
});

export const mutations = {
    setUser: (state: any, user: any) => state.user = user,
    logout: (state: any) => state.user = null
}