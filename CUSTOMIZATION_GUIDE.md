# 🎨 Customization Guide

## Quick Customization Tips

### 1. Changing Logo Colors

**File**: `src/styles/glowing-logo.css`

To change the glow color, find the `.glowing-letter.dark-mode` section:

```css
/* Change these values */
color: #dc2626;  /* Red - change to your color */
text-shadow: 0 0 20px rgba(220, 38, 38, 0.8),  /* Adjust these RGB values */
```

**Example for blue glow:**
```css
color: #2563eb;  /* Blue */
text-shadow: 0 0 20px rgba(37, 99, 235, 0.8),
  0 0 40px rgba(37, 99, 235, 0.5), 
  0 0 60px rgba(37, 99, 235, 0.3);
```

### 2. Changing Cursor Color and Style

**File**: `src/styles/shining-cursor.css`

**For cursor color:**
```css
.cursor-dot {
  background: radial-gradient(circle at 30% 30%, #ff5555, #dc2626);
  /* Change #ff5555 and #dc2626 to your colors */
}

.cursor-ring {
  border-color: rgba(220, 38, 38, 0.8);  /* Change RGB values */
}
```

**For cursor size:**
```css
.shining-cursor {
  width: 30px;  /* Increase for larger cursor */
  height: 30px;
}

.cursor-dot {
  width: 12px;  /* Adjust dot size */
  height: 12px;
}
```

### 3. Changing Location Section

**File**: `src/components/LocationSection.tsx`

**To change the college location:**
```tsx
const googleMapsUrl = "YOUR_NEW_GOOGLE_MAPS_URL_HERE";

// In the iframe src attribute, change the embed URL
// Use Google Maps embed generator: https://www.google.com/maps

// Change college name:
<h3 className="text-xl font-bold text-foreground mb-2">Your College Name</h3>

// Change address:
<p className="text-muted-foreground text-sm leading-relaxed">
  Your Address Here
</p>

// Change event details:
<p className="text-sm text-muted-foreground">
  <span className="font-semibold text-foreground">Event Venue:</span> Your Venue
</p>
```

### 4. Adjusting Logo Animation Speed

**File**: `src/styles/glowing-logo.css`

```css
@keyframes glow-pulse {
  0%, 100% { /* Change 3s to your preferred speed */ }
}
```

Change in `.glow-secondary`:
```css
.glow-secondary {
  animation: glow-pulse 3s ease-in-out infinite;
  /* Change 3s to desired duration: 2s, 4s, 5s, etc. */
}
```

### 5. Adjusting Cursor Animation Speed

**File**: `src/styles/shining-cursor.css`

```css
.cursor-glow {
  animation: cursor-glow-pulse 2s ease-in-out infinite;
  /* Change 2s for glow pulse speed */
}

.cursor-ring {
  animation: cursor-ring-spin 3s linear infinite;
  /* Change 3s for ring rotation speed */
}

.cursor-trail {
  animation: trail-fade 0.8s ease-out forwards;
  /* Change 0.8s for trail fade speed */
}
```

### 6. Changing Trail Effect Intensity

**File**: `src/components/ShiningCursor.tsx`

```tsx
if (trailRef.current && Math.random() > 0.8) {
  // Change 0.8 to adjust trail frequency
  // 0.5 = more trails, 0.9 = fewer trails
```

### 7. Responsive Adjustments

**For mobile logo size:**
```css
@media (max-width: 640px) {
  .glowing-letter {
    font-size: 3rem;  /* Change logo size on mobile */
  }
}
```

**For mobile cursor size:**
```css
@media (max-width: 640px) {
  .shining-cursor {
    width: 24px;  /* Change cursor size on mobile */
    height: 24px;
  }
}
```

## Advanced Customizations

### Custom Gradient for Logo

In `glowing-logo.css`, modify the shimmer effect:

```css
.glowing-letter::before {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),  /* Increase opacity for more shimmer */
    transparent
  );
}
```

### Custom Cursor Particle Trail

In `shining-cursor.css`:

```css
.cursor-trail {
  width: 8px;  /* Change particle size */
  height: 8px;
  background: radial-gradient(
    circle,
    rgba(220, 38, 38, 0.8) 0%,
    rgba(220, 38, 38, 0.4) 70%,
    transparent 100%
  );
}
```

### Custom Map Styling

In `LocationSection.tsx`:

```tsx
<iframe
  src="YOUR_MAPS_URL?parameters"
  // You can customize:
  // - zoom level
  // - map type (roadmap, satellite, terrain, hybrid)
  // - initial view
/>
```

## Color Reference Guide

### Matrix Theme Colors (from index.css)
- **Primary Red**: `--matrix-red: 0 70% 50%` → `#dc2626`
- **Maroon**: `--matrix-maroon: 350 60% 35%` → `#7f1d1d`
- **Glow**: `--matrix-glow: 0 80% 55%` → `#ff4444`
- **Ember**: `--matrix-ember: 15 80% 50%` → `#ff6600`

### Using Tailwind CSS Colors

Instead of hex codes, you can use Tailwind colors:
- `text-red-600`
- `shadow-red-500`
- `border-red-400`

## Removing Features (if needed)

### Remove Glowing Logo
1. Delete `src/components/GlowingLogo.tsx`
2. Delete `src/styles/glowing-logo.css`
3. Remove import from `HeroSection.tsx`
4. Remove the component from JSX

### Remove Shining Cursor
1. Delete `src/components/ShiningCursor.tsx`
2. Delete `src/styles/shining-cursor.css`
3. Remove import from `Index.tsx`
4. Remove the component from JSX
5. Remove cursor CSS import from `index.css`

### Remove Location Section
1. Delete `src/components/LocationSection.tsx`
2. Delete `src/styles/location.css`
3. Remove import from `Index.tsx`
4. Remove the component from JSX

## Testing Your Changes

After making customizations:

1. **Hot Reload**: Changes should auto-reload in dev mode
2. **Clear Cache**: `Ctrl+Shift+R` in browser if needed
3. **Check Console**: Look for any TypeScript/CSS errors
4. **Mobile Test**: Test on mobile using DevTools

## Common Issues & Solutions

**Issue**: Logo not glowing
- **Solution**: Check if `glowing-logo.css` is imported in `index.css`

**Issue**: Cursor not showing
- **Solution**: Make sure `ShiningCursor` component is in `Index.tsx` before content

**Issue**: Map not loading
- **Solution**: Check Google Maps embed URL and API access

**Issue**: Animations jittery
- **Solution**: Reduce animation speed or check system performance

## Need Help?

- Restart development server: `bun run dev`
- Rebuild project: `bun run build`
- Check for TypeScript errors in terminal
- Verify all imports are correct

---

**Happy Customizing! 🎨✨**
