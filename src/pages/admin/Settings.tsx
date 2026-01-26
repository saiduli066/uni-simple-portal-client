import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Database,
  Palette,
  Save,
  RefreshCw
} from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'University Portal',
    siteUrl: 'https://portal.university.edu',
    adminEmail: 'admin@university.edu',
    maxFileSize: '10',
    sessionTimeout: '30',
    enableRegistration: true,
    enableEmailVerification: true,
    enableTwoFactor: false,
    allowPublicProfiles: false,
    maintenanceMode: false
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  const sections = [
    {
      title: 'General Settings',
      icon: SettingsIcon,
      fields: [
        { label: 'Site Name', name: 'siteName', type: 'text' },
        { label: 'Site URL', name: 'siteUrl', type: 'text' },
        { label: 'Admin Email', name: 'adminEmail', type: 'email' }
      ]
    },
    {
      title: 'System Configuration',
      icon: Database,
      fields: [
        { label: 'Max File Upload Size (MB)', name: 'maxFileSize', type: 'number' },
        { label: 'Session Timeout (minutes)', name: 'sessionTimeout', type: 'number' }
      ]
    },
    {
      title: 'Access Control',
      icon: Shield,
      toggles: [
        { label: 'Enable New User Registration', name: 'enableRegistration', description: 'Allow new users to register on the portal' },
        { label: 'Email Verification Required', name: 'enableEmailVerification', description: 'Users must verify email before access' },
        { label: 'Two-Factor Authentication', name: 'enableTwoFactor', description: 'Enable 2FA for enhanced security' },
        { label: 'Public Profiles', name: 'allowPublicProfiles', description: 'Allow users to make profiles publicly visible' }
      ]
    },
    {
      title: 'Maintenance',
      icon: RefreshCw,
      toggles: [
        { label: 'Maintenance Mode', name: 'maintenanceMode', description: 'Put the site in maintenance mode (admins only)' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
          <p className="text-gray-600 mt-1">Configure portal settings and preferences</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw size={18} />
            Reset to Default
          </Button>
          <Button onClick={handleSave} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Save size={18} />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Settings Sections */}
      {sections.map((section, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <section.icon size={24} />
            </div>
            <h2 className="text-xl font-semibold">{section.title}</h2>
          </div>

          <div className="space-y-4">
            {/* Text/Number Fields */}
            {section.fields && section.fields.map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                <Input
                  type={field.type}
                  value={String(settings[field.name as keyof typeof settings])}
                  onChange={(e) => setSettings({ ...settings, [field.name]: e.target.value })}
                  className="max-w-md"
                />
              </div>
            ))}

            {/* Toggle Switches */}
            {section.toggles && section.toggles.map((toggle, idx) => (
              <div key={idx} className="flex items-start justify-between py-4 border-b last:border-0">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{toggle.label}</div>
                  <div className="text-sm text-gray-600 mt-1">{toggle.description}</div>
                </div>
                <button
                  onClick={() => setSettings({ ...settings, [toggle.name]: !settings[toggle.name as keyof typeof settings] })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings[toggle.name as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings[toggle.name as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>
      ))}

      {/* Email Notification Settings */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
            <Bell size={24} />
          </div>
          <h2 className="text-xl font-semibold">Email Notifications</h2>
        </div>

        <div className="space-y-4">
          {[
            { label: 'New User Registration', description: 'Notify admins when new users register' },
            { label: 'Fellowship Applications', description: 'Notify when fellowship applications are submitted' },
            { label: 'Library Overdue Reminders', description: 'Send reminders for overdue books' },
            { label: 'System Alerts', description: 'Critical system notifications and errors' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start justify-between py-4 border-b last:border-0">
              <div className="flex-1">
                <div className="font-medium text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-600 mt-1">{item.description}</div>
              </div>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Theme Customization */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-pink-50 text-pink-600">
            <Palette size={24} />
          </div>
          <h2 className="text-xl font-semibold">Theme Customization</h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { name: 'Blue', color: 'bg-blue-600' },
            { name: 'Purple', color: 'bg-purple-600' },
            { name: 'Green', color: 'bg-green-600' },
            { name: 'Orange', color: 'bg-orange-600' }
          ].map((theme, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-blue-600 hover:bg-gray-50 transition-colors"
            >
              <div className={`w-16 h-16 rounded-full ${theme.color}`} />
              <span className="text-sm font-medium">{theme.name}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-red-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-red-50 text-red-600">
            <Shield size={24} />
          </div>
          <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          These actions are irreversible. Please be careful.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
            Clear All Cache
          </Button>
          <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
            Reset Database
          </Button>
          <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
            Export All Data
          </Button>
        </div>
      </Card>
    </div>
  );
}
