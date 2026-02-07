// ==========================================
// 🔥 FIREBASE CONFIGURATION
// ==========================================
// ⚠️ IMPORTANTE: Reemplaza estos valores con los de TU proyecto Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase (solo si las credenciales están configuradas)
let db = null;
let firebaseEnabled = false;

if (firebaseConfig.apiKey !== "TU_API_KEY_AQUI" && typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    firebaseEnabled = true;
    console.log("✅ Firebase conectado correctamente");
  } catch (error) {
    console.warn("⚠️ Error inicializando Firebase:", error);
  }
} else {
  console.log("ℹ️ Firebase no configurado. Los datos se guardarán localmente.");
}

// Función para guardar zonas en Firestore
const saveZonesToFirebase = async (zones) => {
  if (!firebaseEnabled || !db) return;
  try {
    await db.collection('layouts').doc('main').set({
      zones: zones,
      updatedAt: new Date().toISOString()
    });
    console.log("💾 Layout guardado en Firebase");
  } catch (error) {
    console.error("Error guardando en Firebase:", error);
  }
};

// Función para cargar zonas desde Firestore
const loadZonesFromFirebase = async () => {
  if (!firebaseEnabled || !db) return null;
  try {
    const doc = await db.collection('layouts').doc('main').get();
    if (doc.exists) {
      console.log("📥 Layout cargado desde Firebase");
      return doc.data().zones;
    }
  } catch (error) {
    console.error("Error cargando desde Firebase:", error);
  }
  return null;
};

// ==========================================
// Enums and Constants
// ==========================================
const ProductType = { FOOTWEAR: 'Calzado', APPAREL: 'Indumentaria', ACCESSORIES: 'Accesorios' };
const ProductCategory = { RUNNING: 'Running', FASHION: 'Moda', TENNIS: 'Tenis', FOOTBALL: 'Fútbol', GOLF: 'Golf', TRAINING: 'Entrenamiento' };
const ZoneType = { WALL: 'Pared', GONDOLA: 'Góndola Central', TABLE: 'Mesa de Entrada', WINDOW: 'Vidriera' };

const MOCK_PRODUCTS = [
  { id: 'p1', sku: 'NIKE-RUN-001', name: 'Speed Runner X', brand: 'Nike', type: ProductType.FOOTWEAR, category: ProductCategory.RUNNING, price: 120, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80' },
  { id: 'p2', sku: 'ADI-RUN-002', name: 'Marathon Vest', brand: 'Adidas', type: ProductType.APPAREL, category: ProductCategory.RUNNING, price: 45, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80' },
  { id: 'p3', sku: 'NIKE-ACC-003', name: 'Pro Running Socks', brand: 'Nike', type: ProductType.ACCESSORIES, category: ProductCategory.RUNNING, price: 15, imageUrl: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=300&q=80' },
  { id: 'p4', sku: 'SAL-RUN-004', name: 'Trail Blazer 2', brand: 'Salomon', type: ProductType.FOOTWEAR, category: ProductCategory.RUNNING, price: 130, imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=300&q=80' },
  { id: 'p5', sku: 'PUM-FUT-005', name: 'Striker Elite Cleats', brand: 'Puma', type: ProductType.FOOTWEAR, category: ProductCategory.FOOTBALL, price: 200, imageUrl: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=300&q=80' },
  { id: 'p6', sku: 'ADI-FUT-006', name: 'Team Jersey Home', brand: 'Adidas', type: ProductType.APPAREL, category: ProductCategory.FOOTBALL, price: 80, imageUrl: 'https://images.unsplash.com/photo-1577212017184-80e68a2214b4?auto=format&fit=crop&w=300&q=80' },
  { id: 'p7', sku: 'S78-ACC-007', name: 'Training Cone Set', brand: 'Sport78', type: ProductType.ACCESSORIES, category: ProductCategory.FOOTBALL, price: 25, imageUrl: 'https://images.unsplash.com/photo-1580237072559-00109c314064?auto=format&fit=crop&w=300&q=80' },
  { id: 'p8', sku: 'REU-ACC-008', name: 'Goalie Gloves', brand: 'Reusch', type: ProductType.ACCESSORIES, category: ProductCategory.FOOTBALL, price: 55, imageUrl: 'https://images.unsplash.com/photo-1631527375253-66258679cb8e?auto=format&fit=crop&w=300&q=80' },
  { id: 'p9', sku: 'WIL-TEN-009', name: 'Court King Shoes', brand: 'Wilson', type: ProductType.FOOTWEAR, category: ProductCategory.TENNIS, price: 110, imageUrl: 'https://images.unsplash.com/photo-1581100223783-a7bb077cb54c?auto=format&fit=crop&w=300&q=80' },
  { id: 'p10', sku: 'LAC-TEN-010', name: 'Grand Slam Polo', brand: 'Lacoste', type: ProductType.APPAREL, category: ProductCategory.TENNIS, price: 60, imageUrl: 'https://images.unsplash.com/photo-1625910515337-17d98d08ea00?auto=format&fit=crop&w=300&q=80' },
  { id: 'p11', sku: 'WIL-ACC-011', name: 'Pro Racket Grip', brand: 'Wilson', type: ProductType.ACCESSORIES, category: ProductCategory.TENNIS, price: 10, imageUrl: 'https://images.unsplash.com/photo-1617083934555-563d6383a158?auto=format&fit=crop&w=300&q=80' },
  { id: 'p12', sku: 'VAN-FAS-012', name: 'Urban Street Sneakers', brand: 'Vans', type: ProductType.FOOTWEAR, category: ProductCategory.FASHION, price: 90, imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=300&q=80' },
  { id: 'p13', sku: 'NIKE-FAS-013', name: 'Vintage Track Jacket', brand: 'Nike', type: ProductType.APPAREL, category: ProductCategory.FASHION, price: 75, imageUrl: 'https://images.unsplash.com/photo-1544367563-12123d832d34?auto=format&fit=crop&w=300&q=80' },
  { id: 'p14', sku: 'NEW-ACC-014', name: 'Logo Cap', brand: 'New Era', type: ProductType.ACCESSORIES, category: ProductCategory.FASHION, price: 30, imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=300&q=80' },
  { id: 'p15', sku: 'FOO-GOL-015', name: 'Green Master Spikes', brand: 'FootJoy', type: ProductType.FOOTWEAR, category: ProductCategory.GOLF, price: 150, imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c9f0363?auto=format&fit=crop&w=300&q=80' },
  { id: 'p16', sku: 'UND-GOL-016', name: 'Tech Polo', brand: 'Under Armour', type: ProductType.APPAREL, category: ProductCategory.GOLF, price: 70, imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=300&q=80' },
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
  return <span ref={ref} className={`inline-flex items-center justify-center ${className}`}></span>;
};

// ==========================================
// Components
// ==========================================

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

  return (
    <div className={`relative w-full h-full border border-gray-200 rounded-lg shadow-inner overflow-hidden flex flex-col items-center justify-center p-8 transition-colors ${isLayoutMode ? 'bg-slate-50' : 'bg-white'}`}>
      <div className='absolute inset-0 pointer-events-none opacity-[0.05]' style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div ref={containerRef} className={`relative grid grid-cols-10 grid-rows-12 gap-4 w-full max-w-4xl h-full max-h-[800px] aspect-[3/4] p-4 border-2 rounded-xl transition-all ${isLayoutMode ? 'border-orange-300 bg-orange-50/10' : 'border-dashed border-gray-300 bg-gray-50'}`}>
        {zones.map(zone => {
          const isSelected = selectedZoneId === zone.id;
          const assignedImages = zone.productIds.slice(0, 4).map(getProductImage).filter(Boolean);
          const remaining = Math.max(0, zone.productIds.length - 4);
          const isCompatible = draggedProduct ? ((!zone.assignedCategory || zone.assignedCategory === draggedProduct.category) && (!zone.assignedType || zone.assignedType === draggedProduct.type)) : true;
          return (
            <div
              key={zone.id}
              onMouseDown={(e) => isLayoutMode && handleMouseDown(e, zone, 'MOVE')}
              onClick={() => onZoneClick(zone.id)}
              className={`relative flex flex-col p-2 border transition-all duration-75 z-10 rounded-md select-none ${isLayoutMode ? 'cursor-move' : 'cursor-pointer'} ${isSelected ? (isLayoutMode ? 'border-orange-500 ring-2 ring-orange-200 bg-orange-100 z-20' : 'border-indigo-600 ring-2 ring-indigo-200 bg-indigo-50 shadow-lg z-20') : 'bg-white shadow-sm border-gray-300'}`}
              style={{ gridColumn: `${zone.x} / span ${zone.w}`, gridRow: `${zone.y} / span ${zone.h}` }}
            >
              <div className='flex items-center justify-between mb-2 pointer-events-none'>
                <span className={`text-[10px] font-bold uppercase tracking-tighter truncate ${isLayoutMode ? 'text-orange-700' : 'text-gray-500'}`}>{zone.name}</span>
                {!isLayoutMode && <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${zone.productIds.length >= zone.capacity ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{`${zone.productIds.length}/${zone.capacity}`}</span>}
              </div>
              {!isLayoutMode ? (
                <div className='flex-1 grid grid-cols-2 gap-1 content-start overflow-hidden pointer-events-none'>
                  {assignedImages.map((src, idx) => <div key={idx} className='aspect-square rounded-sm overflow-hidden bg-gray-100'><img src={src} className='w-full h-full object-cover' /></div>)}
                  {remaining > 0 && <div className='aspect-square rounded-sm bg-gray-100 flex items-center justify-center text-[10px] text-gray-500'>{`+${remaining}`}</div>}
                  {zone.productIds.length === 0 && <div className='col-span-2 h-full flex items-center justify-center text-gray-300'><span className='text-xs italic'>Vacío</span></div>}
                </div>
              ) : (
                <div className='flex-1 flex flex-col items-center justify-center text-orange-300 opacity-50'>
                  <div className='text-[10px] font-mono'>{`${zone.w}x${zone.h}`}</div>
                </div>
              )}
              {draggedProduct && isCompatible && !isLayoutMode && <div className='absolute inset-0 bg-indigo-500/10 border-2 border-indigo-500 border-dashed rounded-md flex items-center justify-center z-20 animate-pulse pointer-events-none'><span className='bg-white px-2 py-1 rounded shadow text-xs font-bold text-indigo-700'>Colocar Aquí</span></div>}
            </div>
          );
        })}
        <div className='col-start-4 col-span-4 row-start-1 row-span-1 bg-slate-800 rounded-b-xl flex items-center justify-center text-white shadow-md z-0 pointer-events-none'>
          <span className='text-xs font-bold uppercase tracking-widest'>📦 Caja / Checkout</span>
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pb-2 text-xs font-bold text-gray-400 uppercase tracking-widest'>Entrada</div>
    </div>
  );
};

// ==========================================
// Main Application Component
// ==========================================

const App = () => {
  // State
  const [products, setProducts] = React.useState(MOCK_PRODUCTS);
  const [zones, setZones] = React.useState(INITIAL_ZONES);
  const [selectedZoneId, setSelectedZoneId] = React.useState(null);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isLayoutMode, setIsLayoutMode] = React.useState(false);
  const [editingZoneId, setEditingZoneId] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('ALL');
  const [activeType, setActiveType] = React.useState('ALL');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSaving, setIsSaving] = React.useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = React.useState(null); // 'CATALOG' | 'ANALYTICS' | null

  // Persistence: Cargar datos de Firebase al inicio
  React.useEffect(() => {
    const loadData = async () => {
      const savedZones = await loadZonesFromFirebase();
      if (savedZones && savedZones.length > 0) {
        setZones(savedZones);
      }
      setIsLoading(false);
    };
    loadData();
  }, []);

  // Persistence: Guardar en Firebase cuando cambian las zonas (con debounce)
  const saveTimeoutRef = React.useRef(null);
  React.useEffect(() => {
    if (isLoading) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    setIsSaving(true);
    saveTimeoutRef.current = setTimeout(async () => {
      await saveZonesToFirebase(zones);
      setIsSaving(false);
    }, 1000);

    return () => { if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current); };
  }, [zones, isLoading]);

  // Derived Values
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

  // Handlers
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

  const handleExcelUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);

        const newProducts = data.map((row, idx) => {
          const rawType = String(row.RUBRO || row.rubro || row.Type || row.type || '').toLowerCase();
          const rawCat = String(row.CATEGORIA || row.categoria || row.Category || row.category || '').toLowerCase();

          let pType = ProductType.APPAREL;
          if (rawType.includes('calzado') || rawType.includes('zapatilla') || rawType.includes('footwear')) pType = ProductType.FOOTWEAR;
          if (rawType.includes('accesorio') || rawType.includes('accessories')) pType = ProductType.ACCESSORIES;

          let category = ProductCategory.FASHION;
          if (rawCat.includes('run')) category = ProductCategory.RUNNING;
          if (rawCat.includes('fut') || rawCat.includes('soc')) category = ProductCategory.FOOTBALL;
          if (rawCat.includes('ten')) category = ProductCategory.TENNIS;
          if (rawCat.includes('gol')) category = ProductCategory.GOLF;
          if (rawCat.includes('ent') || rawCat.includes('train')) category = ProductCategory.TRAINING;

          return {
            id: String(row.ID || row.id || `p-new-${idx}-${Date.now()}`),
            sku: String(row.SKU || row.sku || row.Sku || 'N/A'),
            name: String(row.NOMBRE || row.nombre || row.Name || row.name || 'Producto sin nombre'),
            brand: String(row.MARCA || row.marca || row.Brand || row.brand || 'Genérica'),
            type: pType,
            category: category,
            price: Number(row.PRECIO || row.precio || row.Price || row.price || 0),
            imageUrl: String(row.IMAGEN || row.imagen || row.Image || row.image || 'https://images.unsplash.com/photo-1560362614-89027598847b?auto=format&fit=crop&w=300&q=80')
          };
        });

        if (newProducts.length > 0) {
          setProducts(prev => [...prev, ...newProducts]);
          alert(`¡Éxito! Se han importado ${newProducts.length} productos.`);
        }
      } catch (error) {
        console.error("Error al procesar Excel:", error);
        alert("Error al procesar el archivo Excel. Verifica el formato.");
      }
    };
    reader.readAsBinaryString(file);
    e.target.value = '';
  };

  const handleUpdateZoneConfig = (zoneId, updates) => setZones(prev => prev.map(z => z.id === zoneId ? { ...z, ...updates } : z));
  const handleRemoveProductFromZone = (zoneId, productId) => setZones(prev => prev.map(z => z.id === zoneId ? { ...z, productIds: z.productIds.filter(id => id !== productId) } : z));
  const handleReset = () => { if (confirm('¿Desea resetear el layout?')) { setZones(INITIAL_ZONES); setSelectedZoneId(null); setSelectedProduct(null); } };
  const handleAddZone = () => {
    const newZone = { id: `z-${Date.now()}`, name: 'Nueva Zona', type: ZoneType.GONDOLA, x: 5, y: 5, w: 2, h: 2, productIds: [], capacity: 4, assignedCategory: null };
    setZones(prev => [...prev, newZone]);
    setEditingZoneId(newZone.id);
  };
  const handleDeleteZone = (zoneId) => { if (confirm('¿Eliminar esta zona?')) { setZones(prev => prev.filter(z => z.id !== zoneId)); setEditingZoneId(null); } };

  return (
    <div className='flex h-screen w-full bg-gray-50 text-slate-800'>
      {/* Sidebar Catálogo */}
      <aside className={`fixed inset-y-0 left-0 z-[60] w-80 lg:w-96 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 transform lg:relative lg:translate-x-0 ${activeMobileMenu === 'CATALOG' ? 'translate-x-0' : '-translate-x-full'} ${isLayoutMode ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
        <div className='p-6 border-b flex justify-between items-center'>
          <div>
            <h1 className='text-xl font-bold text-indigo-700 flex items-center gap-2'><Icon name='LayoutGrid' size={24} /> Sport78</h1>
            <p className='text-xs text-gray-500'>Visual Merchandising</p>
          </div>
          <div className='flex gap-2'>
            <label className='cursor-pointer p-2 text-gray-400 hover:text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors' title='Subir Excel'>
              <Icon name='Upload' size={20} />
              <input type='file' className='hidden' accept='.xlsx, .xls, .csv' onChange={handleExcelUpload} />
            </label>
            <button onClick={() => setActiveMobileMenu(null)} className='lg:hidden p-2 text-gray-400'><Icon name='X' size={20} /></button>
          </div>
        </div>
        {/* Filters */}
        <div className='p-4 space-y-4'>
          <div>
            <h3 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-2'>Categoría</h3>
            <div className='flex flex-wrap gap-2'>
              <button onClick={() => setActiveCategory('ALL')} className={`text-xs px-3 py-1.5 rounded-full border ${activeCategory === 'ALL' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 border-gray-200'}`}>Todas</button>
              {Object.values(ProductCategory).map(cat => <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-xs px-3 py-1.5 rounded-full border ${activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border-gray-200'}`}>{cat}</button>)}
            </div>
          </div>
          <div>
            <h3 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-2'>Tipo</h3>
            <div className='flex gap-2'>
              <button onClick={() => setActiveType('ALL')} className={`flex-1 text-xs px-2 py-1.5 rounded border text-center ${activeType === 'ALL' ? 'bg-slate-100 border-slate-300 font-bold' : 'border-gray-200'}`}>Todos</button>
              {Object.values(ProductType).map(t => <button key={t} onClick={() => setActiveType(t)} className={`flex-1 text-xs px-2 py-1.5 rounded border text-center ${activeType === t ? 'bg-slate-100 border-slate-300 font-bold' : 'border-gray-200'}`}>{t}</button>)}
            </div>
          </div>
        </div>
        {/* Product List */}
        <div className='flex-1 overflow-y-auto px-4 pb-4'>
          <h3 className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 sticky top-0 bg-white py-2 z-10 border-b flex justify-between items-center'>Catálogo ({filteredProducts.length})</h3>
          <div className='grid grid-cols-2 gap-3'>
            {filteredProducts.map(product => {
              const isSelected = selectedProduct?.id === product.id;
              return (
                <div key={product.id} onClick={() => setSelectedProduct(isSelected ? null : product)} className={`group relative rounded-lg border cursor-pointer overflow-hidden transition-all ${isSelected ? 'ring-2 ring-indigo-600 border-indigo-600 shadow-lg scale-95' : 'border-gray-200 hover:border-gray-400 shadow-sm'}`}>
                  <div className='aspect-square bg-gray-100 relative'>
                    <img src={product.imageUrl} className='w-full h-full object-cover' />
                    {isSelected && <div className='absolute inset-0 bg-indigo-900/20 flex items-center justify-center'><Icon name='Check' size={32} className='text-white' /></div>}
                  </div>
                  <div className='p-2 bg-white'>
                    <p className='text-xs font-bold truncate text-gray-800'>{product.name}</p>
                    <div className='flex items-center justify-between mt-1'>
                      <div className='flex flex-col min-w-0'>
                        <p className='text-[10px] text-gray-500 truncate'>{product.brand}</p>
                        <p className='text-[9px] text-indigo-400 font-mono truncate'>{product.sku}</p>
                      </div>
                      <p className='text-[10px] font-semibold text-indigo-600 ml-1'>${product.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex-1 flex flex-col relative bg-slate-100/50 h-screen overflow-hidden'>
        <header className='h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm z-10 shrink-0'>
          <div className='flex items-center gap-3'>
            <button onClick={() => setActiveMobileMenu('CATALOG')} className='lg:hidden p-2 bg-indigo-50 text-indigo-700 rounded-md'><Icon name='Menu' /></button>
            <h2 className='text-sm lg:text-lg font-semibold text-gray-800'>Plano</h2>
            {firebaseEnabled && <div className={`text-[10px] px-2 py-0.5 rounded-full ${isSaving ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{isSaving ? '🔄 Guardando...' : '☁️ Sincronizado'}</div>}
            {selectedProduct && <div className='bg-indigo-600 text-white text-[10px] px-2 py-1 rounded-full animate-bounce flex items-center gap-1'>{selectedProduct.brand} <button onClick={() => setSelectedProduct(null)}><Icon name='X' size={10} /></button></div>}
          </div>
          <div className='flex items-center gap-2'>
            <button onClick={() => setActiveMobileMenu('ANALYTICS')} className='lg:hidden p-2 bg-slate-50 text-slate-700 rounded-md'><Icon name='BarChart3' /></button>
            {isLayoutMode && <button onClick={handleAddZone} className='bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 shadow-sm animate-pulse'><Icon name='Plus' size={16} /> AGREGAR SECTOR</button>}
            <button onClick={() => { setIsLayoutMode(!isLayoutMode); setSelectedZoneId(null); setEditingZoneId(null); }} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium ${isLayoutMode ? 'bg-orange-100 text-orange-700' : 'bg-white border'}`}>{isLayoutMode ? '✓ Listo' : '✏️ Editar'}</button>
            <button onClick={handleReset} className='p-2 text-gray-400 hover:text-gray-600'><Icon name='RotateCcw' /></button>
          </div>
        </header>

        <div className='flex-1 flex overflow-hidden'>
          <div className={`flex-1 p-6 flex flex-col items-center justify-center overflow-auto ${isLayoutMode ? 'bg-slate-200/50' : ''}`}>
            <div className='w-full h-full max-w-5xl max-h-full'>
              <StoreMap zones={zones} products={products} onZoneClick={handleZoneClick} onZoneUpdate={handleUpdateZoneConfig} selectedZoneId={isLayoutMode ? editingZoneId : selectedZoneId} draggedProduct={selectedProduct} isLayoutMode={isLayoutMode} />
            </div>
          </div>
          {/* Analytics Sidebar */}
          <aside className={`fixed inset-y-0 right-0 z-[60] w-72 bg-white border-l flex flex-col transition-transform duration-300 transform lg:relative lg:translate-x-0 ${activeMobileMenu === 'ANALYTICS' ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='p-4 border-b flex justify-between items-center font-bold text-gray-700'>
              <span>📈 Share de Marcas</span>
              <button onClick={() => setActiveMobileMenu(null)} className='lg:hidden'><Icon name='X' /></button>
            </div>
            <div className='p-4 flex-1 flex flex-col overflow-y-auto'>
              {brandStats.length === 0 ? <div className='text-center py-12 text-gray-400 text-xs'>Sin datos. Coloque productos.</div> : (
                <>
                  <div className='flex flex-col gap-1 pb-4 mb-4 border-b'><span className='text-xs text-gray-400 uppercase'>Total Artículos</span><span className='text-4xl font-bold'>{zones.reduce((acc, z) => acc + z.productIds.length, 0)}</span></div>
                  <div className='aspect-square w-44 mx-auto mb-6 rounded-full shadow-lg border-4 border-white' style={{ background: pieChartBackground }}></div>
                  <div className='space-y-4'>
                    {brandStats.map((stat, idx) => (
                      <div key={stat.brand}>
                        <div className='flex items-center justify-between text-xs mb-1'><div className='flex items-center gap-2'><div className='w-3 h-3 rounded-full' style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }}></div><span>{stat.brand}</span></div><b>{stat.percent.toFixed(0)}%</b></div>
                        <div className='h-1.5 bg-gray-100 rounded-full overflow-hidden'><div className='h-full' style={{ width: `${stat.percent}%`, backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }}></div></div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>
      </main>

      {/* Modals */}
      {isLayoutMode && editingZone && (
        <div className='fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'>
          <div className='bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden'>
            <div className='px-6 py-4 border-b flex justify-between items-center bg-orange-50'><h3 className='text-lg font-bold text-orange-900'>⚙️ Editar Zona</h3><button onClick={() => setEditingZoneId(null)} className='text-orange-700'><Icon name='X' /></button></div>
            <div className='p-6 space-y-4 text-sm'>
              <div><label className='text-xs font-bold text-gray-400 block mb-1 uppercase'>Nombre</label><input type='text' value={editingZone.name} onChange={(e) => handleUpdateZoneConfig(editingZone.id, { name: e.target.value })} className='w-full border rounded p-2' /></div>
              <div className='grid grid-cols-2 gap-4'>
                <div><label className='text-xs font-bold text-gray-400 block mb-1 uppercase'>Tipo</label><select value={editingZone.type} onChange={(e) => handleUpdateZoneConfig(editingZone.id, { type: e.target.value })} className='w-full border rounded p-2'>{Object.values(ZoneType).map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                <div><label className='text-xs font-bold text-gray-400 block mb-1 uppercase'>Capacidad</label><input type='number' value={editingZone.capacity} onChange={(e) => handleUpdateZoneConfig(editingZone.id, { capacity: parseInt(e.target.value) || 1 })} className='w-full border rounded p-2' /></div>
              </div>
              <div className='bg-gray-50 p-4 rounded border text-[10px] space-y-2'>
                <p className='font-bold text-gray-500 uppercase'>📏 Geometría (X, Y, W, H)</p>
                <div className='grid grid-cols-4 gap-2'>
                  {['x', 'y', 'w', 'h'].map(k => <input key={k} type='number' value={editingZone[k]} onChange={(e) => handleUpdateZoneConfig(editingZone.id, { [k]: Math.max(1, parseInt(e.target.value) || 1) })} className='border rounded p-1 text-center' />)}
                </div>
              </div>
              <div className='flex justify-between pt-2'><button onClick={() => handleDeleteZone(editingZone.id)} className='text-red-500 hover:underline'>Borrar Zona</button><button onClick={() => setEditingZoneId(null)} className='bg-orange-600 text-white px-4 py-2 rounded'>✓ Guardar</button></div>
            </div>
          </div>
        </div>
      )}

      {!isLayoutMode && selectedZone && (
        <div className='fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'>
          <div className='bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden'>
            <div className='px-6 py-4 border-b flex justify-between bg-gray-50'><div><h3 className='text-lg font-bold'>{selectedZone.name}</h3><p className='text-xs text-gray-500'>{selectedZone.productIds.length} productos</p></div><button onClick={() => setSelectedZoneId(null)}><Icon name='X' /></button></div>
            <div className='flex-1 flex flex-col lg:flex-row overflow-hidden'>
              <div className='flex-1 overflow-y-auto p-6 bg-slate-50'>
                {selectedZone.productIds.length === 0 ? <div className='h-full flex flex-col items-center justify-center text-gray-300'><Icon name='ShoppingBag' size={48} /><p>Vacio</p></div> : (
                  <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {selectedZone.productIds.map(pid => {
                      const p = products.find(pr => pr.id === pid); if (!p) return null;
                      return <div key={pid} className='group relative bg-white border rounded shadow-sm overflow-hidden'><img src={p.imageUrl} className='aspect-square object-cover' /><div className='p-2'><p className='text-xs font-bold truncate'>{p.name}</p></div><button onClick={() => handleRemoveProductFromZone(selectedZone.id, pid)} className='absolute top-1 right-1 bg-white/80 p-1 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity'><Icon name='Trash2' size={12} /></button></div>
                    })}
                  </div>
                )}
              </div>
              <div className='w-full lg:w-72 bg-white border-l p-6 space-y-6'>
                <div><label className='text-xs font-bold text-gray-400 block mb-2 uppercase'>Límites</label><select value={selectedZone.assignedCategory || ''} onChange={(e) => handleUpdateZoneConfig(selectedZone.id, { assignedCategory: e.target.value || null })} className='w-full border rounded p-2 text-sm'><option value=''>Cualquier Disciplina</option>{Object.values(ProductCategory).map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                <div className='pt-4 border-t'><p className='text-xs font-bold mb-2 uppercase'>Ocupación ({selectedZone.productIds.length}/{selectedZone.capacity})</p><div className='h-2 bg-gray-100 rounded-full overflow-hidden'><div className={`h-full ${selectedZone.productIds.length >= selectedZone.capacity ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${(selectedZone.productIds.length / selectedZone.capacity) * 100}%` }}></div></div></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeMobileMenu && <div onClick={() => setActiveMobileMenu(null)} className='fixed inset-0 bg-black/40 z-50 lg:hidden'></div>}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
