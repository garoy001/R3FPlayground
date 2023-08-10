export const addEmission = (item, mult) => {
	const color = {
		r: item.color.r,
		g: item.color.g,
		b: item.color.b,
	};
	item.color.setRGB(color.r, color.g, color.b);
	item.toneMapped = false;
	item.emissiveIntensity = 10 * mult;
	// return color;
};
