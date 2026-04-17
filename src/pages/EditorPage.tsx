import { useState } from "react";
import { EditorHeader, type ViewMode } from "@/components/editor/EditorHeader";
import { ChatPanel } from "@/components/editor/ChatPanel";
import { CodePanel } from "@/components/editor/CodePanel";
import { PreviewPanel } from "@/components/editor/PreviewPanel";

export default function EditorPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [code, setCode] = useState(`import React from 'react';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome back, Alex</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          <p className="text-4xl font-bold">$12,450.00</p>
          <p className="text-sm text-green-500 mt-2">↑ 12% from last month</p>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-2">Active Users</h2>
          <p className="text-4xl font-bold">2,543</p>
          <p className="text-sm text-blue-500 mt-2">↑ 8% from yesterday</p>
        </Card>
      </div>
    </div>
  );
}`);

  return (
    <div className="h-screen flex flex-col bg-neutral-950 text-white overflow-hidden">
      <EditorHeader 
        projectName="E-commerce Platform" 
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      <main className="flex-1 flex overflow-hidden">
        {/* Left: Chat Side (Fixed) */}
        <ChatPanel />
        
        {/* Right: Toggleable Workspace */}
        <div className="flex-1 flex divide-x divide-white/5 bg-neutral-900/50 overflow-hidden">
          
          {/* Code Section */}
          {viewMode === "code" && (
            <div className="flex-1 min-w-0 transition-all duration-300 ease-in-out w-full">
              <CodePanel code={code} onChange={setCode} />
            </div>
          )}
          
          {/* Preview Section */}
          {viewMode === "preview" && (
            <div className="flex-1 min-w-0 bg-white transition-all duration-300 ease-in-out w-full">
              <PreviewPanel code={code} />
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
