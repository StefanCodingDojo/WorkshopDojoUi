class PartialController {
    /**
     * Renders the requested angular partials.
     * @param partialName The name of the partial to render.
     * @return The rendered partial.
     */
    def renderPartials(final String partialType, final String partialName) {
        final String pathToTemplate = partialName != null ? "${partialType}/${partialName}" : "${partialType}"
        try {
            render template: pathToTemplate
        } catch (Exception ignore) {
            render status: 404
        }
    }
}
