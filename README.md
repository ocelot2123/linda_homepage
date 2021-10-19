# INFTE Storefront

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#development-process">Development Process</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li>
      <a href="#frontend-style-guide">Frontend Style Guide</a>
      <ul>
        <li><a href="#useful-links">Useful Links</a></li>
        <li><a href="#creating-components">Creating Components</a></li>
	<li><a href="#css">CSS</a></li>
	<li><a href="#jsx">JSX</a></li>
      </ul>
    </li>
  </ol>
</details>

## Development Process
1. Write code on feature branch
2. Create PR and wait for code review
3. Squash and merge into master
4. Storybook approval from designer

## Deployment
1. When pushed into master branch, Github Actions builds and pushes storybook into S3 Bucket

## Frontend Style Guide
### Useful links
1. [Kent C. Odds blog](https://kentcdodds.com/blog/)
2. [Airbnb react style guide](https://airbnb.io/javascript/react/#basic-rules)
### Creating components
1. Component should have its own folder and at least contain index.ts and ComponentName.tsx files.
    ```
    ./ComponentName
    ├── index.ts
    ├── ComponentName.tsx
    ```
    *ComponentName.tsx*
    ```tsx
      import React from 'react'

      interface IProps {}
      
      const ComponentName: React.FC<IProps> = (props) => {
        return (
          <div>
            
          </div>
        )
      }

      export default ComponentName;

      ```

    *index.ts*
    ```ts
      import ComponentName from './ComponentName';

      export default ComponentName;
    ```

### CSS
1. Use styled-components for styling
2. Naming of the styled-component should start from `S` so developer won't be confused if it is styled component or not
    ```tsx
        <SText>
            Some text
        <SText>

        const SText = styled.span``;
    ```
3. <details>
	  <summary>Use class names for dynamic styles implementation instead of styledComponents props</summary>  
	  `clsx` util could be useful:  

    ```tsx
        <SText className={clsx({active: true, isSomething: false})}>
            Some text
        <SText>

        const SText = styled.span`
            &.active{
                color: blue;
            }
            &.isSomething {
                color: green
            }
        `
    ```
  </details>

4. Breakpoints are defined in the `src/app/components/shared/helpers.ts`

5. When styling write mobile-first css properties and in the media queries write styles for higher resolutions

6. For mediaQueries inside styled component use `styledMediaQuery('mobile' | 'tablet' | 'desktop')` helper
  ```tsx
    const SHeader = styled.header`
      /* first mobile */
      font-size: 12px;

      ${styledMediaQuery('tablet')} {
        font-size: 16px;
      }

      ${styledMediaQuery('desktop')} {
        font-size: 18px;
      }
    `;
  ```
### JSX
1. While writing conditional rendering it is better to use ternary rather than `&&`. 
  [See this](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)
