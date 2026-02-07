// Enums and Constants
const ProductType = { FOOTWEAR: 'Calzado', APPAREL: 'Indumentaria', ACCESSORIES: 'Accesorios' };
const ProductCategory = { RUNNING: 'Running', FASHION: 'Moda', TENNIS: 'Tenis', FOOTBALL: 'Fútbol', GOLF: 'Golf', TRAINING: 'Entrenamiento' };
const ZoneType = { WALL: 'Pared', GONDOLA: 'Góndola Central', TABLE: 'Mesa de Entrada', WINDOW: 'Vidriera' };

const MOCK_PRODUCTS = [
  { id: 'p1', name: 'Speed Runner X', brand: 'Nike', type: ProductType.FOOTWEAR, category: ProductCategory.RUNNING, price: 120, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80' },
  { id: 'p2', name: 'Marathon Vest', brand: 'Adidas', type: ProductType.APPAREL, category: ProductCategory.RUNNING, price: 45, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80' },
  { id: 'p3', name: 'Pro Running Socks', brand: 'Nike', type: ProductType.ACCESSORIES, category: ProductCategory.RUNNING, price: 15, imageUrl: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=300&q=80' },
  { id: 'p4', name: 'Trail Blazer 2', brand: 'Salomon', type: ProductType.FOOTWEAR, category: ProductCategory.RUNNING, price: 130, imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=300&q=80' },
  { id: 'p5', name: 'Striker Elite Cleats', brand: 'Puma', type: ProductType.FOOTWEAR, category: ProductCategory.FOOTBALL, price: 200, imageUrl: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=300&q=80' },
  { id: 'p6', name: 'Team Jersey Home', brand: 'Adidas', type: ProductType.APPAREL, category: ProductCategory.FOOTBALL, price: 80, imageUrl: 'https://images.unsplash.com/photo-1577212017184-80e68a2214b4?auto=format&fit=crop&w=300&q=80' },
  { id: 'p7', name: 'Training Cone Set', brand: 'Sport78', type: ProductType.ACCESSORIES, category: ProductCategory.FOOTBALL, price: 25, imageUrl: 'https://images.unsplash.com/photo-1580237072559-00109c314064?auto=format&fit=crop&w=300&q=80' },
  { id: 'p8', name: 'Goalie Gloves', brand: 'Reusch', type: ProductType.ACCESSORIES, category: ProductCategory.FOOTBALL, price: 55, imageUrl: 'https://images.unsplash.com/photo-1631527375253-66258679cb8e?auto=format&fit=crop&w=300&q=80' },
  { id: 'p9', name: 'Court King Shoes', brand: 'Wilson', type: ProductType.FOOTWEAR, category: ProductCategory.TENNIS, price: 110, imageUrl: 'https://images.unsplash.com/photo-1581100223783-a7bb077cb54c?auto=format&fit=crop&w=300&q=80' },
  { id: 'p10', name: 'Grand Slam Polo', brand: 'Lacoste', type: ProductType.APPAREL, category: ProductCategory.TENNIS, price: 60, imageUrl: 'https://images.unsplash.com/photo-1625910515337-17d98d08ea00?auto=format&fit=crop&w=300&q=80' },
  { id: 'p11', name: 'Pro Racket Grip', brand: 'Wilson', type: ProductType.ACCESSORIES, category: ProductCategory.TENNIS, price: 10, imageUrl: 'https://images.unsplash.com/photo-1617083934555-563d6383a158?auto=format&fit=crop&w=300&q=80' },
  { id: 'p12', name: 'Urban Street Sneakers', brand: 'Vans', type: ProductType.FOOTWEAR, category: ProductCategory.FASHION, price: 90, imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=300&q=80' },
  { id: 'p13', name: 'Vintage Track Jacket', brand: 'Nike', type: ProductType.APPAREL, category: ProductCategory.FASHION, price: 75, imageUrl: 'https://images.unsplash.com/photo-1544367563-12123d832d34?auto=format&fit=crop&w=300&q=80' },
  { id: 'p14', name: 'Logo Cap', brand: 'New Era', type: ProductType.ACCESSORIES, category: ProductCategory.FASHION, price: 30, imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=300&q=80' },
  { id: 'p15', name: 'Green Master Spikes', brand: 'FootJoy', type: ProductType.FOOTWEAR, category: ProductCategory.GOLF, price: 150, imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c9f0363?auto=format&fit=crop&w=300&q=80' },
  { id: 'p16', name: 'Tech Polo', brand: 'Under Armour', type: ProductType.APPAREL, category: ProductCategory.GOLF, price: 70, imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=300&q=80' },
];

const INITIAL_ZONES = [
  { id: 'z1', name: 'Vidriera Izquierda', type: ZoneType.WINDOW, x: 1, y: 11, w: 3, h: 1, productIds: [], capacity: 3, assignedCategory: null },
  { id: 'z2', name: 'Vidriera Derecha', type: ZoneType.WINDOW, x: 8, y: 11, w: 3, h: 1, productIds: [], capacity: 3, assignedCategory: null },
  { id: 'z3', name: 'Mesa Destacada', type: ZoneType.TABLE, x: 5, y: 9, w: 2, h: 1, productIds: [], capacity: 4, assignedCategory: null },
  { id: 'z4', name: 'Pared Running (Izq)', type: ZoneType.WALL, x: 1, y: 3, w: 1, h: 6, productIds: [], capacity: 8, assignedCategory: ProductCategory.RUNNING },
  { id: 'z5', name: 'Pared Moda/Golf (Der)', type: ZoneType.WALL, x: 10, y: 3, w: 1, h: 6, productIds: [], capacity: 8, assignedCategory: null },
  { id: 'z6', name: 'Isla Central A', type: ZoneType.GONDOLA, x: 3, y: 4, w: 2, h: 3, productIds: [], capacity: 6, assignedCategory: null },
  { id: 'z7', name: 'Isla Central B', type: ZoneType.GONDOLA, x: 7, y: 4, w: 2, h: 3, productIds: [], capacity: 6, assignedCategory: null },
  { id: 'z9', name: 'Isla Accesorios A', type: ZoneType.GONDOLA, x: 3, y: 8, w: 2, h: 1, productIds: [], capacity: 4, assignedCategory: null, assignedType: ProductType.ACCESSORIES },
  { id: 'z10', name: 'Isla Accesorios B', type: ZoneType.GONDOLA, x: 7, y: 8, w: 2, h: 1, productIds: [], capacity: 4, assignedCategory: null, assignedType: ProductType.ACCESSORIES },
  { id: 'z8', name: 'Fondo (Deportes)', type: ZoneType.WALL, x: 3, y: 1, w: 6, h: 1, productIds: [], capacity: 10, assignedCategory: ProductCategory.FOOTBALL },
];

const CHART_COLORS = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#6366f1', '#14b8a6', '#f43f5e'];

// Icon components using Lucide
const Icon = ({ name, size = 16, className = '' }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && lucide[name]) {
      ref.current.innerHTML = '';
      const icon = lucide.createElement(lucide[name]);
      icon.setAttribute('width', size);
      icon.setAttribute('height', size);
      if (className) icon.setAttribute('class', className);
      ref.current.appendChild(icon);
    }
  }, [name, size, className]);
  return React.createElement('span', { ref, className: `inline-flex items-center justify-center ${className}` });
};

// StoreMap Component
const StoreMap = ({ zones, products, onZoneClick, onZoneUpdate, selectedZoneId, draggedProduct, isLayoutMode = false }) => {
  const containerRef = React.useRef(null);
  const [dragState, setDragState] = React.useState(null);
  
  const getProductImage = (id) => products.find(p => p.id === id)?.imageUrl;

  const handleMouseDown = (e, zone, type) => {
    if (!isLayoutMode) return;
    e.stopPropagation();
    e.preventDefault();
    setDragState({ type, zoneId: zone.id, startX: e.clientX, startY: e.clientY, initial: { x: zone.x, y: zone.y, w: zone.w, h: zone.h } });
  };

  React.useEffect(() => {
    if (!dragState || !onZoneUpdate || !containerRef.current) return;
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cellW = rect.width / 10, cellH = rect.height / 12;
      const deltaX = e.clientX - dragState.startX, deltaY = e.clientY - dragState.startY;
      const gridDeltaX = Math.round(deltaX / cellW), gridDeltaY = Math.round(deltaY / cellH);
      if (dragState.type === 'MOVE') {
        onZoneUpdate(dragState.zoneId, { x: Math.min(10, Math.max(1, dragState.initial.x + gridDeltaX)), y: Math.min(12, Math.max(1, dragState.initial.y + gridDeltaY)) });
      } else {
        onZoneUpdate(dragState.zoneId, { w: Math.min(10, Math.max(1, dragState.initial.w + gridDeltaX)), h: Math.min(12, Math.max(1, dragState.initial.h + gridDeltaY)) });
      }
    };
    const handleMouseUp = () => setDragState(null);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => { window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseup', handleMouseUp); };
  }, [dragState, onZoneUpdate]);

  return React.createElement('div', { className: `relative w-full h-full border border-gray-200 rounded-lg shadow-inner overflow-hidden flex flex-col items-center justify-center p-8 transition-colors ${isLayoutMode ? 'bg-slate-50' : 'bg-white'}` },
    React.createElement('div', { className: 'absolute inset-0 pointer-events-none opacity-[0.05]', style: { backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' } }),
    React.createElement('div', { ref: containerRef, className: `relative grid grid-cols-10 grid-rows-12 gap-4 w-full max-w-4xl h-full max-h-[800px] aspect-[3/4] p-4 border-2 rounded-xl transition-all ${isLayoutMode ? 'border-orange-300 bg-orange-50/10' : 'border-dashed border-gray-300 bg-gray-50'}` },
      zones.map(zone => {
        const isSelected = selectedZoneId === zone.id;
        const assignedImages = zone.productIds.slice(0, 4).map(getProductImage).filter(Boolean);
        const remaining = Math.max(0, zone.productIds.length - 4);
        const isCompatible = draggedProduct ? ((!zone.assignedCategory || zone.assignedCategory === draggedProduct.category) && (!zone.assignedType || zone.assignedType === draggedProduct.type)) : true;
        return React.createElement('div', {
          key: zone.id,
          onMouseDown: (e) => isLayoutMode && handleMouseDown(e, zone, 'MOVE'),
          onClick: () => onZoneClick(zone.id),
          className: `relative flex flex-col p-2 border transition-all duration-75 z-10 rounded-md select-none ${isLayoutMode ? 'cursor-move' : 'cursor-pointer'} ${isSelected ? (isLayoutMode ? 'border-orange-500 ring-2 ring-orange-200 bg-orange-100 z-20' : 'border-indigo-600 ring-2 ring-indigo-200 bg-indigo-50 shadow-lg z-20') : 'bg-white shadow-sm border-gray-300'}`,
          style: { gridColumn: `${zone.x} / span ${zone.w}`, gridRow: `${zone.y} / span ${zone.h}` }
        },
          React.createElement('div', { className: 'flex items-center justify-between mb-2 pointer-events-none' },
            React.createElement('span', { className: `text-[10px] font-bold uppercase tracking-tighter truncate ${isLayoutMode ? 'text-orange-700' : 'text-gray-500'}` }, zone.name),
            !isLayoutMode && React.createElement('span', { className: `text-[9px] px-1.5 py-0.5 rounded-full ${zone.productIds.length >= zone.capacity ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}` }, `${zone.productIds.length}/${zone.capacity}`)
          ),
          !isLayoutMode ? React.createElement('div', { className: 'flex-1 grid grid-cols-2 gap-1 content-start overflow-hidden pointer-events-none' },
            assignedImages.map((src, idx) => React.createElement('div', { key: idx, className: 'aspect-square rounded-sm overflow-hidden bg-gray-100' }, React.createElement('img', { src, className: 'w-full h-full object-cover' }))),
            remaining > 0 && React.createElement('div', { className: 'aspect-square rounded-sm bg-gray-100 flex items-center justify-center text-[10px] text-gray-500' }, `+${remaining}`),
            zone.productIds.length === 0 && React.createElement('div', { className: 'col-span-2 h-full flex items-center justify-center text-gray-300' }, React.createElement('span', { className: 'text-xs italic' }, 'Vacío'))
          ) : React.createElement('div', { className: 'flex-1 flex flex-col items-center justify-center text-orange-300 opacity-50' }, React.createElement('div', { className: 'text-[10px] font-mono' }, `${zone.w}x${zone.h}`)),
          draggedProduct && isCompatible && !isLayoutMode && React.createElement('div', { className: 'absolute inset-0 bg-indigo-500/10 border-2 border-indigo-500 border-dashed rounded-md flex items-center justify-center z-20 animate-pulse pointer-events-none' }, React.createElement('span', { className: 'bg-white px-2 py-1 rounded shadow text-xs font-bold text-indigo-700' }, 'Colocar Aquí'))
        );
      }),
      React.createElement('div', { className: 'col-start-4 col-span-4 row-start-1 row-span-1 bg-slate-800 rounded-b-xl flex items-center justify-center text-white shadow-md z-0 pointer-events-none' },
        React.createElement('span', { className: 'text-xs font-bold uppercase tracking-widest' }, '📦 Caja / Checkout'))
    ),
    React.createElement('div', { className: 'absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pb-2 text-xs font-bold text-gray-400 uppercase tracking-widest' }, 'Entrada')
  );
};

// Main App
const App = () => {
  const [products] = React.useState(MOCK_PRODUCTS);
  const [zones, setZones] = React.useState(INITIAL_ZONES);
  const [selectedZoneId, setSelectedZoneId] = React.useState(null);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isLayoutMode, setIsLayoutMode] = React.useState(false);
  const [editingZoneId, setEditingZoneId] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('ALL');
  const [activeType, setActiveType] = React.useState('ALL');

  const filteredProducts = React.useMemo(() => products.filter(p => (activeCategory === 'ALL' || p.category === activeCategory) && (activeType === 'ALL' || p.type === activeType)), [products, activeCategory, activeType]);
  const selectedZone = React.useMemo(() => zones.find(z => z.id === selectedZoneId), [zones, selectedZoneId]);
  const editingZone = React.useMemo(() => zones.find(z => z.id === editingZoneId), [zones, editingZoneId]);

  const brandStats = React.useMemo(() => {
    const placedProductIds = zones.flatMap(z => z.productIds);
    if (placedProductIds.length === 0) return [];
    const brandCounts = {};
    placedProductIds.forEach(id => { const p = products.find(pr => pr.id === id); if (p) brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1; });
    return Object.entries(brandCounts).map(([brand, count]) => ({ brand, count, percent: (count / placedProductIds.length) * 100 })).sort((a, b) => b.percent - a.percent);
  }, [zones, products]);

  const pieChartBackground = React.useMemo(() => {
    if (brandStats.length === 0) return 'conic-gradient(#f1f5f9 0% 100%)';
    let stops = [], current = 0;
    brandStats.forEach((stat, idx) => { const color = CHART_COLORS[idx % CHART_COLORS.length]; stops.push(`${color} ${current}% ${current + stat.percent}%`); current += stat.percent; });
    return `conic-gradient(${stops.join(', ')})`;
  }, [brandStats]);

  const handleZoneClick = (zoneId) => {
    if (isLayoutMode) { setEditingZoneId(zoneId); return; }
    if (selectedProduct) {
      setZones(prev => prev.map(z => {
        if (z.id === zoneId) {
          if (z.productIds.length >= z.capacity) { alert("Esta zona está llena."); return z; }
          if (z.assignedCategory && z.assignedCategory !== selectedProduct.category) { alert(`Solo productos de: ${z.assignedCategory}`); return z; }
          if (z.assignedType && z.assignedType !== selectedProduct.type) { alert(`Solo productos tipo: ${z.assignedType}`); return z; }
          if (z.productIds.includes(selectedProduct.id)) return z;
          return { ...z, productIds: [...z.productIds, selectedProduct.id] };
        }
        return z;
      }));
      setSelectedProduct(null);
    } else {
      setSelectedZoneId(zoneId === selectedZoneId ? null : zoneId);
    }
  };

  const handleRemoveProductFromZone = (zoneId, productId) => setZones(prev => prev.map(z => z.id === zoneId ? { ...z, productIds: z.productIds.filter(id => id !== productId) } : z));
  const handleUpdateZoneConfig = (zoneId, updates) => setZones(prev => prev.map(z => z.id === zoneId ? { ...z, ...updates } : z));
  const handleReset = () => { setZones(INITIAL_ZONES); setSelectedZoneId(null); setSelectedProduct(null); };

  return React.createElement('div', { className: 'flex h-screen w-full bg-gray-50 text-slate-800' },
    // Sidebar
    React.createElement('aside', { className: `w-80 lg:w-96 bg-white border-r border-gray-200 flex flex-col shadow-xl z-20 shrink-0 ${isLayoutMode ? 'opacity-50 pointer-events-none grayscale' : ''}` },
      React.createElement('div', { className: 'p-6 border-b border-gray-100' },
        React.createElement('h1', { className: 'text-xl font-bold flex items-center gap-2 text-indigo-700' }, '📊 Retailers Maqueta SPORT78'),
        React.createElement('p', { className: 'text-xs text-gray-500 mt-1' }, 'Herramienta de Visual Merchandising')
      ),
      // Filters
      React.createElement('div', { className: 'p-4 space-y-4' },
        React.createElement('div', {},
          React.createElement('h3', { className: 'text-xs font-bold text-gray-400 uppercase tracking-wider mb-2' }, 'Categoría'),
          React.createElement('div', { className: 'flex flex-wrap gap-2' },
            React.createElement('button', { onClick: () => setActiveCategory('ALL'), className: `text-xs px-3 py-1.5 rounded-full border ${activeCategory === 'ALL' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 border-gray-200'}` }, 'Todas'),
            Object.values(ProductCategory).map(cat => React.createElement('button', { key: cat, onClick: () => setActiveCategory(cat), className: `text-xs px-3 py-1.5 rounded-full border ${activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border-gray-200'}` }, cat))
          )
        ),
        React.createElement('div', {},
          React.createElement('h3', { className: 'text-xs font-bold text-gray-400 uppercase tracking-wider mb-2' }, 'Tipo'),
          React.createElement('div', { className: 'flex gap-2' },
            React.createElement('button', { onClick: () => setActiveType('ALL'), className: `flex-1 text-xs px-2 py-1.5 rounded border ${activeType === 'ALL' ? 'bg-slate-100 font-bold' : 'border-gray-200'}` }, 'Todos'),
            Object.values(ProductType).map(type => React.createElement('button', { key: type, onClick: () => setActiveType(type), className: `flex-1 text-xs px-2 py-1.5 rounded border ${activeType === type ? 'bg-slate-100 font-bold' : 'border-gray-200'}` }, type))
          )
        )
      ),
      // Product List
      React.createElement('div', { className: 'flex-1 overflow-y-auto px-4 pb-4' },
        React.createElement('h3', { className: 'text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 sticky top-0 bg-white py-2 z-10 border-b' }, `Catálogo (${filteredProducts.length})`),
        React.createElement('div', { className: 'grid grid-cols-2 gap-3' },
          filteredProducts.map(product => {
            const isSelected = selectedProduct?.id === product.id;
            return React.createElement('div', { key: product.id, onClick: () => setSelectedProduct(isSelected ? null : product), className: `group relative rounded-lg border cursor-pointer overflow-hidden transition-all ${isSelected ? 'ring-2 ring-indigo-600 border-indigo-600 shadow-lg scale-95' : 'border-gray-200 hover:border-gray-400 hover:shadow-md'}` },
              React.createElement('div', { className: 'aspect-square bg-gray-100 relative' },
                React.createElement('img', { src: product.imageUrl, alt: product.name, className: 'w-full h-full object-cover' }),
                isSelected && React.createElement('div', { className: 'absolute inset-0 bg-indigo-900/20 flex items-center justify-center' }, '✓')
              ),
              React.createElement('div', { className: 'p-2 bg-white' },
                React.createElement('p', { className: 'text-xs font-bold truncate text-gray-800' }, product.name),
                React.createElement('div', { className: 'flex items-center justify-between mt-1' },
                  React.createElement('p', { className: 'text-[10px] text-gray-500 truncate' }, product.brand),
                  React.createElement('p', { className: 'text-[10px] font-semibold text-indigo-600' }, `$${product.price}`)
                )
              )
            );
          })
        )
      )
    ),
    // Main Content
    React.createElement('main', { className: 'flex-1 flex flex-col relative bg-slate-100/50 h-screen overflow-hidden' },
      // Toolbar
      React.createElement('header', { className: 'h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm z-10 shrink-0' },
        React.createElement('div', { className: 'flex items-center gap-4' },
          React.createElement('h2', { className: 'text-lg font-semibold text-gray-800' }, 'Plano del Local'),
          selectedProduct && !isLayoutMode && React.createElement('div', { className: 'bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full flex items-center' },
            `Seleccionado: ${selectedProduct.name}`,
            React.createElement('button', { onClick: () => setSelectedProduct(null), className: 'ml-2 hover:bg-indigo-500 rounded-full p-0.5' }, '✕')
          )
        ),
        React.createElement('div', { className: 'flex items-center gap-3' },
          React.createElement('button', { onClick: () => { setIsLayoutMode(!isLayoutMode); setSelectedZoneId(null); setEditingZoneId(null); }, className: `flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium ${isLayoutMode ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-white text-gray-600 border border-gray-200'}` }, isLayoutMode ? '✓ Finalizar Edición' : '✏️ Editar Layout'),
          React.createElement('button', { onClick: handleReset, className: 'text-gray-500 hover:text-gray-700 p-2 rounded-md hover:bg-gray-100' }, '↺')
        )
      ),
      React.createElement('div', { className: 'flex-1 flex overflow-hidden' },
        // Map Area
        React.createElement('div', { className: `flex-1 p-6 flex flex-col items-center justify-center overflow-auto ${isLayoutMode ? 'bg-slate-200/50' : ''}` },
          React.createElement('div', { className: 'w-full h-full max-w-5xl max-h-full' },
            React.createElement(StoreMap, { zones, products, onZoneClick: handleZoneClick, onZoneUpdate: handleUpdateZoneConfig, selectedZoneId: isLayoutMode ? editingZoneId : selectedZoneId, draggedProduct: selectedProduct, isLayoutMode })
          )
        ),
        // Analytics Sidebar
        React.createElement('aside', { className: 'w-72 bg-white border-l border-gray-200 flex flex-col z-10 shrink-0 overflow-y-auto' },
          React.createElement('div', { className: 'p-4 border-b border-gray-100 bg-gray-50/50' },
            React.createElement('h3', { className: 'font-bold text-gray-700' }, '📈 Share de Marcas')
          ),
          React.createElement('div', { className: 'p-4 flex-1 flex flex-col' },
            brandStats.length === 0 ? React.createElement('div', { className: 'text-center py-12 text-gray-400' }, React.createElement('p', { className: 'text-sm' }, 'Sin datos'), React.createElement('p', { className: 'text-[10px] mt-1' }, 'Coloca productos para ver métricas')) :
            React.createElement('div', { className: 'flex flex-col h-full' },
              React.createElement('div', { className: 'flex flex-col gap-1 pb-6 border-b border-gray-100' },
                React.createElement('span', { className: 'text-xs text-gray-500 uppercase tracking-wider font-semibold' }, 'Total Artículos'),
                React.createElement('span', { className: 'text-4xl font-bold text-slate-800 tracking-tight' }, zones.reduce((acc, z) => acc + z.productIds.length, 0))
              ),
              React.createElement('div', { className: 'py-6 flex justify-center' },
                React.createElement('div', { className: 'w-44 h-44 rounded-full shadow-lg border-4 border-white', style: { background: pieChartBackground } })
              ),
              React.createElement('div', { className: 'space-y-2 overflow-y-auto pr-1' },
                brandStats.map((stat, idx) => React.createElement('div', { key: stat.brand, className: 'flex items-center justify-between p-2 rounded-lg hover:bg-gray-50' },
                  React.createElement('div', { className: 'flex items-center gap-3' },
                    React.createElement('div', { className: 'w-4 h-4 rounded-full', style: { backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] } }),
                    React.createElement('span', { className: 'font-medium text-sm text-gray-700' }, stat.brand)
                  ),
                  React.createElement('div', { className: 'flex flex-col items-end' },
                    React.createElement('span', { className: 'font-bold text-sm text-gray-900' }, `${stat.percent.toFixed(1)}%`),
                    React.createElement('span', { className: 'text-[10px] text-gray-500' }, `${stat.count} un.`)
                  )
                ))
              )
            )
          )
        )
      ),
      // Zone Detail Modal
      !isLayoutMode && selectedZone && React.createElement('div', { className: 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4' },
        React.createElement('div', { className: 'bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden' },
          React.createElement('div', { className: 'px-6 py-4 border-b flex justify-between items-center bg-gray-50' },
            React.createElement('div', {},
              React.createElement('h3', { className: 'text-xl font-bold text-gray-800' }, selectedZone.name),
              React.createElement('p', { className: 'text-sm text-gray-500' }, `${selectedZone.type} • ${selectedZone.productIds.length} Artículos`)
            ),
            React.createElement('button', { onClick: () => setSelectedZoneId(null), className: 'p-2 bg-white border rounded-full hover:bg-gray-100' }, '✕')
          ),
          React.createElement('div', { className: 'flex-1 flex overflow-hidden' },
            React.createElement('div', { className: 'flex-1 overflow-y-auto p-6 bg-slate-50' },
              selectedZone.productIds.length === 0 ? React.createElement('div', { className: 'h-full flex flex-col items-center justify-center text-gray-400' }, React.createElement('p', { className: 'text-lg font-medium' }, 'Esta zona está vacía')) :
              React.createElement('div', { className: 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4' },
                selectedZone.productIds.map(pid => {
                  const prod = products.find(p => p.id === pid);
                  if (!prod) return null;
                  return React.createElement('div', { key: pid, className: 'group relative bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md' },
                    React.createElement('div', { className: 'aspect-square overflow-hidden bg-gray-100' }, React.createElement('img', { src: prod.imageUrl, className: 'w-full h-full object-cover' })),
                    React.createElement('div', { className: 'p-3' },
                      React.createElement('p', { className: 'text-sm font-bold text-gray-800 truncate' }, prod.name),
                      React.createElement('p', { className: 'text-xs text-gray-500' }, prod.type),
                      React.createElement('p', { className: 'text-xs font-semibold text-indigo-600 mt-1' }, `$${prod.price}`)
                    ),
                    React.createElement('button', { onClick: () => handleRemoveProductFromZone(selectedZone.id, pid), className: 'absolute top-2 right-2 p-1.5 bg-white/90 text-red-500 rounded-full shadow-sm opacity-0 group-hover:opacity-100' }, '🗑')
                  );
                })
              )
            ),
            React.createElement('div', { className: 'w-80 border-l bg-white p-6 flex flex-col gap-6 shrink-0' },
              React.createElement('h4', { className: 'text-sm font-bold text-gray-800 uppercase' }, '⚙️ Configuración'),
              React.createElement('div', { className: 'p-4 bg-indigo-50 rounded-lg border border-indigo-100' },
                React.createElement('label', { className: 'text-xs font-bold text-indigo-800 uppercase mb-2 block' }, 'Disciplina Exclusiva'),
                React.createElement('select', { className: 'w-full text-sm p-2.5 bg-white border border-indigo-200 rounded-md', value: selectedZone.assignedCategory || '', onChange: (e) => handleUpdateZoneConfig(selectedZone.id, { assignedCategory: e.target.value || null }) },
                  React.createElement('option', { value: '' }, 'General (Cualquiera)'),
                  Object.values(ProductCategory).map(cat => React.createElement('option', { key: cat, value: cat }, cat))
                )
              ),
              React.createElement('div', {},
                React.createElement('label', { className: 'text-xs font-bold text-gray-500 uppercase mb-2 block' }, 'Capacidad Máxima'),
                React.createElement('div', { className: 'flex items-center gap-3' },
                  React.createElement('input', { type: 'range', min: 1, max: 20, className: 'flex-1 accent-indigo-600', value: selectedZone.capacity, onChange: (e) => handleUpdateZoneConfig(selectedZone.id, { capacity: parseInt(e.target.value) || 1 }) }),
                  React.createElement('span', { className: 'w-12 text-center text-sm font-bold bg-gray-100 py-1 rounded' }, selectedZone.capacity)
                )
              ),
              React.createElement('div', { className: 'mt-auto pt-6 border-t border-gray-100' },
                React.createElement('div', { className: 'flex justify-between items-center mb-2' },
                  React.createElement('span', { className: 'text-sm font-medium text-gray-600' }, 'Ocupación'),
                  React.createElement('span', { className: `text-sm font-bold ${selectedZone.productIds.length >= selectedZone.capacity ? 'text-red-600' : 'text-green-600'}` }, `${Math.round((selectedZone.productIds.length / selectedZone.capacity) * 100)}%`)
                ),
                React.createElement('div', { className: 'w-full bg-gray-100 rounded-full h-3 overflow-hidden' },
                  React.createElement('div', { className: `h-full transition-all ${selectedZone.productIds.length >= selectedZone.capacity ? 'bg-red-500' : 'bg-green-500'}`, style: { width: `${Math.min(100, (selectedZone.productIds.length / selectedZone.capacity) * 100)}%` } })
                )
              )
            )
          )
        )
      )
    )
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
