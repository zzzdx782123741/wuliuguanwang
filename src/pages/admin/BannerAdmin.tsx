import React, { useState, useEffect, useRef } from 'react';
import { Upload, Trash2, MoveUp, MoveDown, Plus, Save, X, Image as ImageIcon } from 'lucide-react';

interface BannerSlide {
  id: string;
  type: 'image' | 'overlay';
  image: string;
  alt: string;
}

const BannerAdmin: React.FC = () => {
  const [slides, setSlides] = useState<BannerSlide[]>([]);
  const [editingSlide, setEditingSlide] = useState<BannerSlide | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 初始化加载数据
  useEffect(() => {
    const savedSlides = localStorage.getItem('customBanners');
    if (savedSlides) {
      try {
        setSlides(JSON.parse(savedSlides));
      } catch (e) {
        console.error('Failed to load banners', e);
      }
    } else {
        // 如果没有数据，加载默认数据以便演示
        const defaultSlides = [
            {
                id: 'original',
                type: 'overlay',
                image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000',
                alt: 'Red Logistics Truck'
            },
            {
                id: 'new',
                type: 'image',
                image: '/banner-new.png',
                alt: '易达宝系列产品上线'
            }
        ];
        setSlides(defaultSlides as BannerSlide[]); // 显式类型断言
    }
  }, []);

  // 保存数据
  const saveSlides = (newSlides: BannerSlide[]) => {
    setSlides(newSlides);
    localStorage.setItem('customBanners', JSON.stringify(newSlides));
    alert('保存成功！首页已更新。');
  };

  // 处理文件选择
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreviewUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 添加新 Banner
  const handleAdd = () => {
    setEditingSlide({
      id: `custom-${Date.now()}`,
      type: 'image',
      image: '',
      alt: ''
    });
    setPreviewUrl('');
  };

  // 编辑 Banner
  const handleEdit = (slide: BannerSlide) => {
    setEditingSlide(slide);
    setPreviewUrl(slide.image);
  };

  // 确认保存编辑
  const handleConfirmEdit = () => {
    if (!editingSlide) return;

    const newSlide = {
      ...editingSlide,
      image: previewUrl || editingSlide.image
    };

    const index = slides.findIndex(s => s.id === newSlide.id);
    let newSlides;
    if (index > -1) {
      newSlides = [...slides];
      newSlides[index] = newSlide;
    } else {
      newSlides = [...slides, newSlide];
    }

    saveSlides(newSlides);
    setEditingSlide(null);
    setPreviewUrl('');
  };

  // 删除 Banner
  const handleDelete = (id: string) => {
    if (confirm('确定要删除这个 Banner 吗？')) {
      const newSlides = slides.filter(s => s.id !== id);
      saveSlides(newSlides);
    }
  };

  // 移动顺序
  const moveSlide = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === slides.length - 1)
    ) return;

    const newSlides = [...slides];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newSlides[index], newSlides[targetIndex]] = [newSlides[targetIndex], newSlides[index]];
    saveSlides(newSlides);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Banner 管理后台</h1>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-[#E60012] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Plus size={20} /> 添加 Banner
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {slides.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              暂无 Banner，请点击右上角添加。
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {slides.map((slide, index) => (
                <div key={slide.id} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                  <div className="w-12 text-center font-mono text-gray-400">
                    {index + 1}
                  </div>
                  
                  <div className="w-48 h-28 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative group">
                    <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                    {slide.type === 'overlay' && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-xs">
                        含文字遮罩
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{slide.alt || '未命名 Banner'}</h3>
                    <p className="text-xs text-gray-500 mt-1 truncate">{slide.image.substring(0, 50)}...</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full mt-2 inline-block ${
                      slide.type === 'overlay' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {slide.type === 'overlay' ? '叠加模式' : '纯图模式'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-1">
                      <button 
                        onClick={() => moveSlide(index, 'up')}
                        disabled={index === 0}
                        className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                      >
                        <MoveUp size={16} />
                      </button>
                      <button 
                        onClick={() => moveSlide(index, 'down')}
                        disabled={index === slides.length - 1}
                        className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                      >
                        <MoveDown size={16} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => handleEdit(slide)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="编辑"
                    >
                      编辑
                    </button>
                    
                    <button
                      onClick={() => handleDelete(slide.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="删除"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 编辑/添加 弹窗 */}
      {editingSlide && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-lg">
                {slides.find(s => s.id === editingSlide.id) ? '编辑 Banner' : '添加 Banner'}
              </h3>
              <button onClick={() => setEditingSlide(null)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* 图片预览与上传 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Banner 图片</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 hover:border-[#E60012] rounded-xl p-4 text-center cursor-pointer transition-all bg-gray-50 group relative h-48 flex flex-col items-center justify-center"
                >
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="h-full object-contain" />
                  ) : (
                    <>
                      <ImageIcon className="w-10 h-10 text-gray-400 mb-2 group-hover:text-[#E60012]" />
                      <p className="text-sm text-gray-500">点击上传图片 (JPG/PNG)</p>
                    </>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                </div>
              </div>

              {/* 描述文字 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">描述文字 (Alt Text)</label>
                <input 
                  type="text" 
                  value={editingSlide.alt}
                  onChange={(e) => setEditingSlide({...editingSlide, alt: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E60012] focus:border-transparent outline-none"
                  placeholder="例如：易达宝上线活动"
                />
              </div>

              {/* 类型选择 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">展示模式</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="type" 
                      value="image"
                      checked={editingSlide.type === 'image'}
                      onChange={() => setEditingSlide({...editingSlide, type: 'image'})}
                      className="text-[#E60012] focus:ring-[#E60012]"
                    />
                    <span className="text-sm">纯图模式 (推荐)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="type" 
                      value="overlay"
                      checked={editingSlide.type === 'overlay'}
                      onChange={() => setEditingSlide({...editingSlide, type: 'overlay'})}
                      className="text-[#E60012] focus:ring-[#E60012]"
                    />
                    <span className="text-sm">叠加文字遮罩 (旧版风格)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 border-t">
              <button 
                onClick={() => setEditingSlide(null)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              >
                取消
              </button>
              <button 
                onClick={handleConfirmEdit}
                className="px-6 py-2 bg-[#E60012] text-white font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <Save size={18} /> 保存更改
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerAdmin;