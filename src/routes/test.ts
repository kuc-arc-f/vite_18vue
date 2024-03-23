//
const router = {
    /**
     *
     * @param
     *
     * @return
     */     
    test2: async function(): Promise<any>
    {
        try {
            return ({ret: "test2", data:[3,4,5,6]});
        } catch (error) {
            throw new Error("error, test2");
        }
    },
    /**
     *
     * @param
     *
     * @return
     */     
    test3: async function(): Promise<any>
    {
        try {
            return ({ret: "test3", data:[3,4,5,6]});
        } catch (error) {
            throw new Error("error, test3");
        }
    },
}

export default router;
