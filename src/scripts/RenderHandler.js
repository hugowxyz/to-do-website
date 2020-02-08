const RenderHandler = pContainer => {
    const container = pContainer;

    return {
        clear: function(target) {
            target.remove();
        },

        clearChildren: function() {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        },

        getContainer: function() { 
            return container; 
        }
    }
}

export default RenderHandler;