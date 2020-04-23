const Icon = ({
	fill = 'currentColor',
	width = '24',
	height = '24',
	viewBox = '0 0 24 24'
}) => (
	<svg
		width={width}
		height={width}
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-hidden="true"
		focusable="false">
		<path fill={fill} d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"></path>
	</svg>
);

export default Icon;
