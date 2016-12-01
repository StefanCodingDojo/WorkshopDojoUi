class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')

        "/partials/$partialType/$partialName?"(controller: "partial", action: "renderPartials") {
            format = "html"
        }
	}
}
