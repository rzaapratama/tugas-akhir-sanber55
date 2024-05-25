describe('Open Application',() => {
    it('should open apps', async() => {
        await $("//android.widget.TextView[@content-desc='Diet Meal App']").click();
    })
})