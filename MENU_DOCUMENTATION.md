# Full-Screen Menu Component - Documentation

## 🎨 Overview
A stunning, award-winning full-screen menu overlay that slides down from the top with professional animations and aesthetic elements.

## ✨ Key Features

### 1. **Professional Slide Animation**
- Menu slides down from top (-100% to 0%)
- Uses Motion MCP spring easing: `900ms` duration with `0.2 bounce`
- Smooth entrance and exit with professional cubic-bezier curves
- Backdrop blur effect for depth

### 2. **Text Reveal Effects**
Each menu item has:
- **3D rotation effect** (rotateX: -90° to 0°)
- **Staggered animations** (80ms delay between items)
- **Hover underline** that slides in from left
- **Arrow indicator** that fades in on hover
- **Number prefix** that changes color on hover

### 3. **Aesthetic Elements**

#### Animated Backgrounds
- Subtle grid pattern overlay (opacity: 5%)
- Two floating gradient orbs that move infinitely
- Professional dark theme (#1d1d1d)

#### Company Details Section
Located in the right sidebar:
- **Contact Information**: Email, Phone, Location with icons
- **Social Media Links**: Instagram, Facebook, LinkedIn
- **Decorative animated lines** that pulse
- Each item has individual stagger animation

#### Corner Decorations
- **Top Left**: Animated pulsing lines
- **Top Right**: Rotating concentric circles (30s/40s rotation)
- **Close Button**: Rotates 90° on hover

### 4. **Interactive Elements**
- Menu toggle button with animated hamburger icon
- Smooth transitions between hamburger and X
- Hover effects on all clickable items:
  - Scale up (1.1x)
  - Color transitions
  - Icon color changes
- Footer with privacy links

## 🎯 Components Created

### 1. `FullScreenMenu.tsx`
Main menu overlay component
- Props: `isOpen`, `onClose`
- Full-screen z-index: 101
- AnimatePresence for mount/unmount animations

### 2. `MenuToggle.tsx`
Hamburger menu button
- Animated three-line icon
- Transforms to X when open
- Smooth spring animations

### 3. Integration in `page.tsx`
- State management for menu open/close
- Positioned in header navigation
- Works with preloader

## 📱 Responsive Design
- Desktop: Two-column layout (menu | company details)
- Mobile: Stacked layout with proper spacing
- Touch-friendly click targets
- Backdrop prevents scroll when open

## 🎬 Animation Timeline

**Opening (900ms total):**
1. 0ms: Backdrop fades in (300ms)
2. 0ms: Menu slides down from top (900ms)
3. 200ms: Header elements fade in
4. 300ms: Menu items start staggering in (80ms apart)
5. 600ms: Company details slide in from left
6. 700ms+: Contact info items stagger in (100ms apart)
7. 800ms: Footer fades in

**Closing (900ms):**
- All animations reverse
- Menu slides up
- Elements fade out with stagger

## 💅 Styling Details

### Colors
- Background: `#1d1d1d` (brand dark)
- Text: White with gray accents
- Borders: `white/10` and `white/20`
- Hover: White background with dark text

### Typography
- Menu items: `text-5xl` to `text-7xl` (clamp)
- Numbers: Tabular nums for alignment
- Font weight: Light (300)
- Tracking: Tight

### Spacing
- Padding: `12` on container
- Gap between items: `2` (8px)
- Section gaps: `12` (48px)

## 🚀 Usage

```tsx
import FullScreenMenu from "@/components/FullScreenMenu";
import MenuToggle from "@/components/MenuToggle";

function MyApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <MenuToggle 
        isOpen={isMenuOpen} 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
      />
      <FullScreenMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
}
```

## 🎨 Customization

### Menu Items
Edit the `menuItems` array:
```tsx
const menuItems = [
  { name: "HOME", href: "/", number: "01" },
  // Add more items...
];
```

### Contact Info
Update contact details in the JSX:
- Email, phone, location
- Social media links
- Company tagline

### Colors
- Change `bg-[#1d1d1d]` to your brand color
- Adjust `text-gray-400` for different accents
- Modify `border-white/10` for borders

## ⚡ Performance
- Uses AnimatePresence for optimized mount/unmount
- Hardware-accelerated transforms (translate, scale, rotate)
- Lazy loading with conditional rendering
- No layout shifts during animation

## 🎯 Accessibility
- ARIA labels on buttons
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Sufficient color contrast

---

**Designed with Motion MCP spring animations for award-winning smoothness** 🏆
