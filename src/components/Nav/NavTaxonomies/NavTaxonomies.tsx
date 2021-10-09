import { Box, Button, ButtonGroup, HStack, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface NavTaxonomiesProps {
  filters: {
    radios: any[];
    selects: any[];
  };
}

const NavTaxonomies = ({
  filters: { radios, selects },
}: NavTaxonomiesProps) => {
  const router = useRouter();
  const { asPath } = router;

  const handleFilterChange = (e: any) => {
    router.push(e.target?.value || e);
  };

  return (
    <div>
      <HStack>
        {radios.length && (
          <ButtonGroup
            isAttached
            variant="solid"
            colorScheme="whiteAlpha"
            spacing="0"
          >
            {radios.map((r) => (
              <Button
                _last={{ borderRight: 0 }}
                borderRight="2px solid"
                borderColor="gray.900"
                key={r.id}
                onClick={() => handleFilterChange(r.value)}
              >
                {r.label}
              </Button>
            ))}
          </ButtonGroup>
        )}

        <Box>
          <HStack>
            {selects.map((s) => {
              return (
                <Select
                  key={s.id}
                  placeholder={s.label}
                  value={asPath}
                  onChange={handleFilterChange}
                >
                  {s.options.map((option: any) => {
                    if (option.children.length) {
                      return (
                        <optgroup key={option.id} label={option.label}>
                          {option.children.map((child: any) => {
                            return (
                              <option key={child.id} value={child.value}>
                                {child.label}
                              </option>
                            );
                          })}
                        </optgroup>
                      );
                    }
                    return (
                      <option key={option.id} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </Select>
              );
            })}
          </HStack>
        </Box>
      </HStack>
    </div>
  );
};

export default NavTaxonomies;
