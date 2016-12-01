<!DOCTYPE html>
<html>
<head>
	<meta name="layout" content="main"/>
	<title>{{'indexTabTitle' | translate}}</title>
</head>
<body>

<div class="container-fluid">
	<header></header>
	<div ng-view="">
		<!-- Don't place stuff here. It gets replaced according to routing rules.-->
	</div>
</div>

</body>
</html>
