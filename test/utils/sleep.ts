// Function to sleep or pause the control flow
function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export { sleep };
