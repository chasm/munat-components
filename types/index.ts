export type Anchor = {
	class?: string | undefined
	href: string
	full?: string | undefined
	label?: string | undefined
	page?: string | undefined
	rel?: string | undefined
}

export type CcSvgProps = {
	fill: string
	license?: string | undefined
	size: string
	stroke: string
}

export type LicenseAttributes = {
	byAttribution?: boolean | undefined
	noDerivatives?: boolean | undefined
	nonCommercial?: boolean | undefined
	shareAlike?: boolean | undefined
}

export type LicenseData = {
	href: string
	license: string
}

export type ImageFormat = "png" | "jpeg" | "avif" | "webp"

export type ImageMediaType =
	| "image/jpeg"
	| "image/png"
	| "image/webp"
	| "image/avif"
	| "image/svg"

export type Article = {
	author?: string | undefined
	image?: Image | undefined
	modifiedOn?: string | Temporal.PlainDateTimeLike | undefined
	publishedOn?: string | Temporal.PlainDateTimeLike | undefined
	publisher?: string | undefined
	section?: string | undefined
	tags?: Array<string> | undefined
	timeToRead?: number | undefined
	title?: string | undefined
}

export type CardLink = Partial<Link> & {
	useMoreLink?: boolean | undefined
}

export type Card = {
	blurb?: string | undefined
	image?: Image | undefined
	link?: CardLink | undefined
	title?: string | undefined
}

export type Icon = {
	href: string
	sizes?: string | undefined
	type: string
}

export type Image = {
	alt?: string | undefined
	config?: ImageConfig | undefined
	describedBy?: string | undefined
	filename: string
	folder: string
	format?: ImageFormat | undefined
	height?: number | undefined
	host?: string | undefined
	width?: number | undefined
}

export type ImageConfig = {
	formats: Array<ImageFormat>
	srcsets: Array<SourceConfig>
	width: number
}

export type Link = {
	href: string
	label: string
}

export type OpenGraphType = "article" | "profile" | "website"

export type Profile = {
	family?: string | undefined
	given?: string | undefined
}

export type Robot = "follow" | "index" | "nofollow" | "noindex"

export type SourceConfig = {
	media?: string | undefined
	width: number
}

export type Twitter = {
	app?: {
		googleplay?: TwitterApp | undefined
		ipad?: TwitterApp | undefined
		iphone?: TwitterApp | undefined
	}
	card?: TwitterCard | undefined
	creator: TwitterId
	description?: string | undefined
	image?: Image | undefined
	player?: TwitterPlayer | undefined
	site: TwitterId
	title?: string | undefined
}

export type TwitterApp = {
	id?: string | undefined
	name?: string | undefined
	url?: string | undefined
}

export type TwitterCard = "app" | "player" | "summary" | "summary_large_image"

export type TwitterId = {
	id?: string | undefined
	username?: string | undefined
}

export type TwitterPlayer = {
	height?: number | undefined
	src?: string | undefined
	stream?: string | undefined
	width?: number | undefined
}

export type Meta = {
	article?: Article | undefined
	author?: string | undefined
	canonical?: string | undefined
	card?: Card | undefined
	charset?: string | undefined
	children?: Array<string> | undefined
	copyright?: string | undefined
	description: string
	event?: string | undefined
	hero?: Image | undefined
	href?: string | undefined
	icons?: Array<Icon> | undefined
	id?: string | undefined
	license?: LicenseData | undefined
	link?: Partial<Link> | undefined
	profile?: Profile | undefined
	publisher?: string | undefined
	robots?: Array<Robot> | undefined
	subtitle?: string | undefined
	timeZone?: Temporal.TimeZoneLike | undefined
	title: string
	twitter?: Partial<Twitter> | undefined
	type?: OpenGraphType | undefined
	uplabel?: string | undefined
	viewport?: string | undefined
}