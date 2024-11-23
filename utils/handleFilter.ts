
export const buildUrl = (filters: Record<string, any>, pathName: string) => {
    const query = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((val) => {
                query.append(key, val);
            });
        } else if (value) {
            query.set(key, value);
        }
    });
    return `${pathName}?${query.toString()}`;
};
