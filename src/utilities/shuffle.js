// Combine and shuffle two arrays
const shuffle = () => {
    const assets = [
        { image: '/assets/doggy.jpg' }, 
        { image: '/assets/froggy.png' },
        { image: '/assets/genius.png' },
        { image: '/assets/lol.png' },
        { image: '/assets/mandalorian.png' },
        { image: '/assets/me_gusta.png' },
        { image: '/assets/pressf.png' },   
        { image: '/assets/1.png' },
    ];
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))
};

export default shuffle;