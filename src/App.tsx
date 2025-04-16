import './App.css'
import { SideNav } from '../lib/main'
import { SideNavItemState } from '../lib/components/SideNav/SideNav.props'
import { Badge } from '../lib/components/Badge/Badge'
function App() {
  return (
    <div className="bg-meteor-100 h-[80vh] w-68 rounded-md">
      <SideNav
        items={[
          {
            label: 'Home',
            link: '/',
            onItemClick: () => alert('Home'),
            leadingIcon: 'Home',
            trailingNumber: 4,
            hasSectionDivider: true,
          },
          {
            label: 'About',
            link: '/about',
            leadingIcon: 'Help',
            trailingNumber: 8,
            subItems: [
              {
                label: 'About 1',
                link: '/about-1',
                trailingNumber: 15,
                subItems: [
                  {
                    label: 'About 1.1',
                    link: '/about-1.1',
                    leadingIcon: 'Document',
                    trailingNumber: 16,
                    hasSectionDivider: true,
                  },
                  {
                    label: 'About 1.2',
                    link: '/about-1.2',
                    leadingIcon: 'Document',
                    trailingNumber: 23,
                  },
                  {
                    label: 'About 1.3',
                    link: '/about-1.3',
                    leadingIcon: 'Document',
                    trailingNumber: 42,
                    state: SideNavItemState.SELECTED,
                  },
                  {
                    label: 'About 1.4',
                    link: '/about-1.4',
                    leadingIcon: 'Document',
                    trailingIcon: 'Lock',
                    trailingNumber: 10,
                  },
                  {
                    label: 'About 1.5',
                    link: '/about-1.5',
                    leadingIcon: 'Document',
                  },
                  {
                    label: 'About 1.6',
                    link: '/about-1.6',
                    leadingIcon: 'Document',
                  },
                ],
              },
              {
                label: 'About 2',
                link: '/about-2',
                leadingContent: (
                  <Badge shape="rounded" size="small" color="earth">
                    A badge
                  </Badge>
                ),
              },
              {
                label: 'About 3',
                link: '/about-3',
                trailingContent: (
                  <Badge shape="rounded" size="small" color="earth">
                    Another badge
                  </Badge>
                ),
              },
              { label: 'About 4', link: '/about-4', leadingIcon: 'Document' },
              { label: 'About 5', link: '/about-5', leadingIcon: 'Document' },
              { label: 'About 6', link: '/about-6', leadingIcon: 'Document' },
            ],
          },
          {
            label: 'Contact',
            link: '/contact',
            leadingIcon: 'Broadcast',
            trailingIcon: 'Lock',
          },
          {
            label: 'Settings',
            link: '/settings',
            leadingIcon: 'GearSolid',
            state: SideNavItemState.DISABLED,
          },
        ]}
      />
    </div>
  )
}

export default App
