/**
 * OnyxCloud Theme Configuration
 * 
 * This file contains the theme configuration for the OnyxCloud Pterodactyl theme.
 * It exports the theme object that will be used throughout the application.
 */

export interface ThemeColors {
    primary: string;
    primaryHover: string;
    secondary: string;
    dark: string;
    darker: string;
    darkest: string;
    light: string;
    lighter: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
    [key: string]: string;
}

export interface Theme {
    name: string;
    colors: ThemeColors;
    fontFamily: string;
    borderRadius: string;
    boxShadow: string;
    transition: string;
}

const colors: ThemeColors = {
    // Primary colors
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    secondary: '#818cf8',
    
    // Grayscale
    dark: '#111827',
    darker: '#0f172a',
    darkest: '#0b1120',
    light: '#f1f5f9',
    lighter: '#ffffff',
    
    // Status colors
    danger: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    info: '#3b82f6',
};

const theme: Theme = {
    name: 'OnyxCloud',
    colors,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
};

// Export as default for ES modules
export default theme;

// Also export as a named export for CommonJS compatibility
export { theme };
